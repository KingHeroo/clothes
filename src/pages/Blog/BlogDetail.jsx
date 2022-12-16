import React from "react";
import { Link } from "react-router-dom";
import "../Blog/blogdetail.css";
import post1 from "../Post/blog/post1.jpg";
import post2 from "../Post/blog/post2.jpg";
import post3 from "../Post/blog/post3.jpg";
import {
  HomeContainer,
  HomeHeaderContainer
} from "./styles";
import Logo from "../../assets/images/Logo.png";
export const BlogDetail = () => {
  return (
    <div>
      <HomeContainer>
        <HomeHeaderContainer>
          <img src={Logo} alt="logo recipes" />
          <Link to="/blog">GO TO BLOG</Link>
        </HomeHeaderContainer>
        <div className="row_post">
          <div className="col_post">
            <img src={post1} alt="" />
            <div className="content-post">
              Và ở Paris, những đêm khiến bạn có nhiều cảm xúc nhất. Bạn đang
              ngồi trong một nhà hàng nhỏ, và cảm giác khuấy động mà bạn cảm
              thấy đến sau 8 giờ tối, khi những ngọn đèn dây dọc theo Rue de
              Buci được bật sáng và lung linh. Đó là một cảm xúc khó diễn tả
              thành lời, nhưng dường như mọi người xung quanh bạn đều cảm nhận
              được điều đó...
            </div>

            <div className="post-btn">
              <Link to="/post1">GO TO BLOG</Link>
            </div>
          </div>
          <div className="col_post">
            <img src={post2} alt="" />
            <div className="content-post">
              Bạn đang ở đó, bây giờ, như thể bạn chưa bao giờ rời đi. Bạn đang
              đứng với tấm bản đồ trên tay, ước gì iPhone của mình không hết
              pin. Bạn nghĩ rằng Oxford Circus hẳn không phải là một cái tên
              trùng hợp ngẫu nhiên, vì nơi này tràn ngập con người, tiếng ồn,
              ánh đèn, xe hơi, hậu quả, cuộc sống. Bạn không chắc chắn nơi để
              tìm, vì vậy bạn tìm kiếm....
            </div>
            <div className="post-btn">
              <Link to="/post2">GO TO BLOG</Link>
            </div>
          </div>
          <div className="col_post">
            <img src={post3} alt="" />
            <div className="content-post">
              Chúc các ngày lễ vui vẻ! Phiên bản Độc quyền Mùa đông 2022 của
              chúng tôi sẽ sớm được phát hành trên các sạp báo trên khắp Canada
              và Hoa Kỳ. Ấn bản này giới thiệu nhiếp ảnh cá nhân của nghệ sĩ
              kiêm nhà xuất bản Hikaru Kiyonaga, cùng với đội ngũ tuyệt vời của
              anh, đến thăm từng nghệ sĩ trong xưởng vẽ, nhà của họ, trong thiên
              nhiên tuyệt vời của Ontario, Canada....
            </div>
            <div className="post-btn">
              <Link to="/post3">GO TO BLOG</Link>
            </div>
          </div>
        </div>
        {/* <div className="banner_post">
          <img src={banner} alt="" />
        </div> */}
      </HomeContainer>
    </div>
  );
};

export default BlogDetail;
