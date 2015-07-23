---
layout: post
title: Upload Image component fun
description: "Upload images to express server with react"
tags: [javascript, react, xhr, ajax, express]
comments: false
---

<section id="table-of-contents" class="toc tocFixed">
  <header>
    <a href="#">
      <h3>Upload Component</h3>
    </a>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

I'm currently building a couple little apps to digest, cateloge, and display heel clicking's from my worldly adventures.  


While building the image processing app I needed to upload the images to an express server. This proved to be a very awesome learning experience that I have felt like sharing in order to help others and probably myself again down the road.

####The React Component

<script src="https://gist.github.com/hartzis/0b77920380736f98e4f9.js"></script>

>Component Includes Preview of Image

When submitted it will trigger the callback that fires the below ajax call with the image file.

#####XHR/Ajax Image Upload

<script src="https://gist.github.com/hartzis/093173bb0b82eaafa73b.js"></script>

####The Server

Along with express I needed to npm install 'multiparty'. This example uses multiparty to parse the form data and extracts the image file.

