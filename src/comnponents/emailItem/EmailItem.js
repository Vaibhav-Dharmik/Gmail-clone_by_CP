import React, { useState } from "react";
import CheckBox from "@material-ui/core/CheckBox";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { IconButton } from "@material-ui/core";

const EmailItem = ({ starred, from, subject, message, received, read }) => {
  const [star, setStar] = useState(starred);
  //   const changeStar = () => {};

  return (
    <Wrapper>
      <CheckBox />
      <IconButton onClick={() => (star ? setStar(false) : setStar(true))}>
        {star ? <StarIcon htmlColor="#f7cb69" /> : <StarBorderIcon />}
      </IconButton>

      <p className={!read && "unread"}>{from}</p>
      <div>
        <p className={!read && "unread"}>{subject}</p>-<span>{message}</span>
      </div>
      <p className={!read && "unread"}>{received}</p>
    </Wrapper>
  );
};

export default EmailItem;
const Wrapper = styled.div`
  padding-left: 20px;
  border-top: 1px solid lightgray;
  //   border-bottom: 1px solid lightgray;
  display: grid;
  grid-template-columns: min-content min-content 120px auto min-content;
  padding-right: 10px;
  align-items: center;
  cursor: pointer;

  div {
    display: flex;

    span {
      color: darkgray;
    }
  }
  .unread {
    color: black;
    font-weight: bolder;
  }
`;
