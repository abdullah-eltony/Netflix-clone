import React from "react";
import MainModal from "./MainModal";
import {
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { MdEmail } from "react-icons/md";

const ShareModal = ({ modalOpen, setModalOpen, movie }) => {
  const ShareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookMessengerShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },
    {
      icon: FaWhatsapp,
      shareButton: WhatsappShareButton,
    },
    {
      icon: FaPinterest,
      shareButton: PinterestShareButton,
    },
    {
      icon: MdEmail,
      shareButton: EmailShareButton,
    },
  ];

  const url = `${window.location.protocol}//${window.location.host}/movies/${movie.name}/`;
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <h2 className="text-3xl font-semibold text-center">
        Share <span className="text-xl font-bold">"{movie.name}"</span>
      </h2>
      <form className="flex flex-rows flex-wrap gap-6">
        {ShareData.map((data, index) => (
          <data.shareButton
            key={index}
            url={url}
            quote={"Netflixo | Free Movies"}
          >
            <div className="w-12 transitions hover:bg-subMain flex-cols bg-dryGray bg-opacity-30 rounded h-12">
              <data.icon />
            </div>
          </data.shareButton>
        ))}
      </form>
    </MainModal>
  );
};

export default ShareModal;
