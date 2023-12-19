import React from "react";
import {
  CreateList,
  CreateListBg,
  CreateTitle,
} from "../styles/createeditstyle";
import { Link } from "react-router-dom";

const CreateEditList = ({ text }) => {
  return (
    <CreateListBg>
      <CreateList>
        <div className="create-header">
          <div>
            <CreateTitle>리스트 {text}</CreateTitle>
          </div>
          <img
            className="create-logo"
            src={process.env.PUBLIC_URL + "./assets/images/logo.svg"}
            alt=""
          />
        </div>
        <div className="create-main">
          <div className="create-main-top">
            <div className="create-main-left">
              <img src="./assets/images/icon.svg" alt="" />
            </div>
            <div className="create-main-right">
              <div className="create-date">
                <span>mm/dd/yyyy</span>
              </div>
              <h2>날짜를 입력해 주세요!</h2>
            </div>
          </div>
          <div className="create-main-ft">
            <input
              className="create-main-txt"
              type="memo"
              maxLength={50}
              placeholder="일정을 입력해 주세요."
            />
            <div className="create-main-bt">
              <img
                src={process.env.PUBLIC_URL + "./assets/images/bt_cancel.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="create-footer">
          <div className="create-footer">
            <button className="bt-no">
              <Link to="/diary/add" />취 소
            </button>
            <button className="bt-yes" type="submit">
              완 료
            </button>
          </div>
        </div>
      </CreateList>
    </CreateListBg>
  );
};

export default CreateEditList;
