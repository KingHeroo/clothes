import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./post.css";
import post2 from "../Post/blog/post2.jpg";

const Post_2 = () => {
  return (
    <div>
      <div class="nav">
        <div class="blog">
          <div class="row">
            <div class="col">
              <div class="headerr">
                <AiFillHome />&nbsp;
                <Link to="/">
                  Quay về &nbsp;<AiOutlineArrowRight />&nbsp;
                </Link>&nbsp;
                <Link to="/blogdetail">
                  Blog&nbsp;
                  <AiOutlineArrowRight />
                </Link>
              </div>
              <hr className="a" />
              <div class="blog-title">Weekend Fashion</div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <section class="content">
        <div class="blog-detail">
          <div class="row">
            <div class="col">
              <div class="blog-content">
                <div class="blog-img">
                  <img
src={post2}
                    alt=""
                  />
                </div>
                <div class="blog-text">
                  <p>
                    A good story encourages us to turn the next page and read
                    more. We want to find out what happens next and what the
                    main characters do and what they say to each other. We may
                    feel excited, sad, afraid, angry or really happy. This is
                    because the experience of reading or listening to a story is
                    much more likely to make us 'feel' that we are part of the
                    story, too. Just like in our 'real' lives, we might love or
                    hate different characters in the story. Perhaps we recognise
                    ourselves or others in some of them. Perhaps we have similar
                    problems. Because of this natural empathy with the
                    characters, our brains process the reading of stories
                    differently from the way we read factual information. Our
                    brains don't always recognise the difference between an
                    imagined situation and a real one so the characters become
                    'alive' to us. What they say and do is therefore more
                    meaningful. This is why the words and structures that relate
                    a story's events, descriptions and conversations are
                    processed in this deeper way. In fact, cultures all around
                    the world have always used storytelling to pass knowledge
                    from one generation to another. Our ancestors understood
                    very well that this was the best way to make sure our
                    histories and information about how to relate to others and
                    to our world was not only understood, but remembered too.
                    (Notice that the word ‘history’ contains the word ‘story’ –
                    More accurately, the word ‘story’ derives from ‘history’.)
                    Encouraging your child to read or listen to stories should
                    therefore help them to learn a second language in a way that
                    is not only fun, but memorable. Let's take a quick look at
                    learning vocabulary within a factual text or within a story.
                    Imagine the readers are eight-year-olds interested in
                    animals. In your opinion, are they more likely to remember
                    AND want to continue reading the first or second text? Many
                    birds and animals live in the world, for example, parrots,
                    pandas, lions, leopards and rabbits. In the sea we can find
                    whales, dolphins, sharks and octopuses. My younger brother
                    is called Fred. Fred's very interested in animals. He talks
                    and asks questions about animals ALL the time! Fred's really
                    interested in parrots and pandas and lions and leopards and
                    rabbits. But Fred's favourite animals live in the sea. He
                    has pictures of whales, dolphins, sharks and octopuses on
                    all the walls of his bedroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post_2;
