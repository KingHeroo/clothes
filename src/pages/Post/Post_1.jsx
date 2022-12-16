import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./post.css";
import post1 from "../Post/blog/post1.jpg";
const Post_1 = () => {
  return (
    <div>
      <div class="nav">
        <div class="blog">
          <div class="row">
            <div class="col">
              <div class="headerr">
                <AiFillHome />
                &nbsp;
                <Link to="/">
                  Quay về &nbsp;
                  <AiOutlineArrowRight />
                  &nbsp;
                </Link>
                &nbsp;
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
                  <img src={post1} alt="" />
                </div>
                <div class="blog-text">
                  <p>
                    You are standing on the corner of Broadway and Prince Street
                    with a Starbucks latte. It’s autumn, and you’re feeling
                    sentimental. You’re wearing a scarf your mother knit you
                    when you were in seventh grade — then, the size of a
                    blanket, now, a just-right shawl. The pattern is a bold
                    tartan, and you inwardly thank her for making something so
                    perpetually chic. You’ll have to give her a call later;
                    maybe soon, you think, because the October breeze is
                    tempting you indoors. Everyone around you is going
                    somewhere. A woman pushing a baby stroller goes from a
                    speed- walk to a jog, adjusting the volume on her
                    headphones. A teenage couple holding hands stop briefly in
                    front of an eyeglasses store display, giggling with
                    those-would-look-stupid-on-me’s and
                    I-think-they’d-look-cute’s. The subway whines and rumbles
                    beneath your feet, somewhere far below this world — in what
                    feels like another world completely. You’re reminded of the
                    Tube in London. You’re there, now, as though you never left.
                    You’re standing with a map in your hand, wishing your iPhone
                    hadn’t run out of battery. Oxford Circus, you think, must
                    have been no coincidental name, as the place is overrun with
                    people, noise, lights, cars, consequences, life. You’re not
                    sure where to look, so you look up. The buildings are old
                    with stone and brass-paned windows. They are filled to the
                    brim with tourists from countries you have or haven’t heard
                    of, speaking flurried languages you only might be able to
                    identify. They’re people who hope they’ll see the Queen,
                    people who want to kiss atop the London Eye. You know the
                    people who pass by like ghosts — save for the ones that step
                    on your toes or bump you with their briefcase — are the real
                    Londoners, cursing rush hour in the most congested part of
                    the city. If they stopped for long enough, you know you’d
                    see them pull back their trench coat sleeve, look at their
                    Daniel Wellington watch, and wonder if they’ll make it home
                    in time for Sunday roast. It’s getting dark now, after all.
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

export default Post_1;
