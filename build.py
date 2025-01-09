#!/usr/bin/env python3

import datetime
import glob
from pathlib import Path
import re
import shutil

import mistletoe
from mistletoe.block_token import Heading
from mistletoe.html_renderer import HtmlRenderer
from mistletoe.span_token import RawText

POST_FILENAME_GLOB = "posts/*/*/*/*.md"
POST_FILENAME_REGEX = r"posts/(\d{4})/(\d\d)/(\d\d)/[^/]+\.md"
NEWS_PLACEHOLDER = '<!-- NEWS PLACEHOLDER -->'
SRC_DIR = Path('src')
DIST_DIR = Path('dist')
INDEX_HTML = 'index.html'

def generate_posts():
    posts = []

    renderer = HtmlRenderer()
    post_filenames = glob.glob(POST_FILENAME_GLOB)
    post_filenames.sort(reverse=True)

    for fn in post_filenames:
        # parse the post date
        match = re.fullmatch(POST_FILENAME_REGEX, fn)
        if match is None:
            raise RuntimeError(f'post {fn} does not match pattern "posts/YYYY/MM/DD/NAME.md"')
        date = datetime.date(int(match.group(1)), int(match.group(2)), int(match.group(3)))

        # load the document
        with open(fn) as f:
            document = mistletoe.Document(f)

        # fetch the post title
        header_error = RuntimeError(f"post {fn} should start with a `##` header for the post title")
        if len(document.children) == 0:
            raise header_error
        heading = document.children[0]
        if not isinstance(heading, Heading) or heading.level != 2 or len(heading.children) < 0:
            raise header_error
        raw_text = heading.children[0]
        if not isinstance(raw_text, RawText):
            raise header_error
        title = raw_text.content
        # remove the title from the markdown
        del document.children[0]

        # generate the header
        header = f'<article><header><h2>{title}</h2><time datetime="{date}">{date.strftime("%d %b %Y")}</time></header>'
        footer = f'</article>'

        posts.append(header + renderer.render(document))

    return posts

def insert_posts():
    posts = generate_posts()
    with open(DIST_DIR / INDEX_HTML) as f:
        html = f.read()
    if NEWS_PLACEHOLDER not in html:
        raise RuntimeError("news placeholder not found")
    html = html.replace(NEWS_PLACEHOLDER, ''.join(posts))
    with open(DIST_DIR / INDEX_HTML, "w") as f:
        f.write(html)

def main():
    shutil.rmtree(DIST_DIR, ignore_errors=True)
    shutil.copytree(SRC_DIR, DIST_DIR)
    insert_posts()


if __name__ == "__main__":
    main()
