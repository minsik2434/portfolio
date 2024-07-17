import React from "react";
import { forwardRef } from "react";
import email from "../assets/email.png";
import github from "../assets/skills/github.png";
import telephone from "../assets/telephone.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = forwardRef((props, ref) => {
  const emailForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const name = emailForm.current.from_name.value;
    const nameRegex = /^[a-zA-Z가-힣]{2,}$/;
    if (!nameRegex.test(name)) {
      toast.error(
        "유효한 이름을 입력해주세요. (2자 이상, 알파벳과 한글만 허용)"
      );
      return;
    }

    const message = emailForm.current.message.value;
    if (!message || message.trim().length < 10) {
      toast.error("메시지를 10자 이상 입력해주세요.");
      return;
    }

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EmailJs_Service_Key}`,
        `${import.meta.env.VITE_EmailJs_Template_Id}`,
        emailForm.current,
        `${import.meta.env.VITE_EmailJs_Public_Key}`
      )
      .then(
        (result) => {
          console.log(result.text);
          emailForm.current.reset();
          toast.success("이메일이 성공적으로 전송되었습니다!");
        },
        (error) => {
          console.log(error.text);
          toast.error("이메일 전송에 실패하였습니다.");
        }
      );
  };
  return (
    <div className="h-[100vh]" ref={ref}>
      <ToastContainer position="top-center" />
      <div className="pt-[78px] pb-[50px] px-[50px] h-full">
        <h2 className="pl-[30px] text-[40px] border-t-[2px] border-black pt-[10px] text-center font-bold">
          Contact
        </h2>
        <div className="flex mt-20 justify-around">
          <div className="text-[20px] flex flex-col pl-20 justify-center gap-[30px]">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-[10px]">
                <img src={email} className="w-[35px]" />
                <h2 className="font-bold">Email</h2>
              </div>
              <div>
                <a
                  href="mailto:minsik2434@gmail.com"
                  className="hover:underline"
                >
                  minsik2434@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-[10px]">
                <img src={github} className="w-[35px]" />
                <h2 className="font-bold">Github</h2>
              </div>
              <div>
                <a
                  href="https://github.com/minsik2434"
                  className="hover:underline"
                >
                  https://github.com/minsik2434
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-[10px]">
                <img src={telephone} className="w-[35px]" />
                <h2 className="font-bold">Phone</h2>
              </div>
              <div>
                <a href="tel:010-2434-4402" className="hover:underline">
                  010-2434-4402
                </a>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg px-7 py-5 w-[50%] shadow-lg">
            <form ref={emailForm} onSubmit={sendEmail}>
              <div className="flex flex-col gap-3">
                <div className="flex justify-center gap-5">
                  <div className="flex flex-col w-full">
                    <span className="font-NotoSansKR_Light">Name</span>
                    <input
                      type="from_name"
                      name="from_name"
                      placeholder="보내시는 분 성함을 입력해주세요"
                      className="border rounded-md w-full py-2 pl-2 mt-1"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="font-NotoSansKR_Light">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="보내시는 분 이메일을 입력해주세요"
                      className="border rounded-md w-full py-2 pl-2 mt-1"
                    />
                  </div>
                </div>
                <div>
                  <span className="font-NotoSansKR_Light">Message</span>
                  <textarea
                    type="message"
                    name="message"
                    className="w-full border resize-none h-64 mt-1 px-3 py-2 rounded-md"
                    placeholder="메시지를 입력해주세요"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="px-3 border rounded-md py-2 bg-[#adb5bd]">
                    전송하기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
