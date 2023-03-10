import { Footer } from "flowbite-react";
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { Foot } from "../../Components/Foot";

const Foter = () => {
  const data = [
    {
      title: "About",
      links: [
        {
          label: "Features",
          link: "#",
        },
        {
          label: "Pricing",
          link: "#",
        },
        {
          label: "Support",
          link: "#",
        },
        {
          label: "Forums",
          link: "#",
        },
      ],
    },
    {
      title: "Project",
      links: [
        {
          label: "Contribute",
          link: "#",
        },
        {
          label: "Media assets",
          link: "#",
        },
        {
          label: "Changelog",
          link: "#",
        },
        {
          label: "Releases",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "Join Discord",
          link: "#",
        },
        {
          label: "Follow on Twitter",
          link: "#",
        },
        {
          label: "Email newsletter",
          link: "#",
        },
        {
          label: "GitHub discussions",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="footer">
      <Foot data={data} />
      {/* <div className="container mx-auto">
        <Footer>
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
              <div>
                <Footer.Title title="Company" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">About</Footer.Link>
                  <Footer.Link href="#">Careers</Footer.Link>
                  <Footer.Link href="#">Brand Center</Footer.Link>
                  <Footer.Link href="#">Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="help center" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Discord Server</Footer.Link>
                  <Footer.Link href="#">Twitter</Footer.Link>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Licensing</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="download" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">iOS</Footer.Link>
                  <Footer.Link href="#">Android</Footer.Link>
                  <Footer.Link href="#">Windows</Footer.Link>
                  <Footer.Link href="#">MacOS</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full py-6 px-4 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Tranx???" year={2023} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
              </div>
            </div>
          </div>
        </Footer>
      </div> */}
    </div>
  );
};

export default Foter;
