import { FunctionComponent, useCallback } from "react";

const Desktop1: FunctionComponent = () => {
  const onTimelineTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='timlineFrameContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUsSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPartnersTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='partnersFrameContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactUsFrame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAGHKrakowWhite1Image1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navigationBarContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-black w-full h-[6675px] text-left text-45xl text-whitesmoke font-roboto">
      <div
        className="absolute top-[88px] left-[188px] w-[1059px] h-14 text-xl text-white"
        data-scroll-to="navigationBarContainer"
      >
        <img
          className="absolute top-[-33px] left-[-22px] w-[172px] h-[122px] object-cover"
          alt=""
          src="/agh-krakow-white-1@2x.png"
        />
        <div
          className="absolute top-[22px] left-[695px] font-medium cursor-pointer"
          onClick={onTimelineTextClick}
        >
          Timeline
        </div>
        <div
          className="absolute top-[22px] left-[591px] font-medium cursor-pointer"
          onClick={onAboutUsTextClick}
        >
          About us
        </div>
        <div
          className="absolute top-[22px] left-[796px] font-medium cursor-pointer"
          onClick={onProjectsTextClick}
        >
          Projects
        </div>
        <div
          className="absolute top-[22px] left-[894px] font-medium cursor-pointer"
          onClick={onPartnersTextClick}
        >
          Partners
        </div>
        <div
          className="absolute top-[22px] left-[988px] font-medium cursor-pointer"
          onClick={onContactTextClick}
        >
          Contact
        </div>
      </div>
      <div className="absolute top-[6533px] left-[calc(50%_-_163px)] text-xl leading-[100%] font-medium text-center inline-block w-[325px] h-[23px]">
        <p className="m-0">© EESTEC AGH Kraków</p>
      </div>
      <div className="absolute top-[6564px] left-[calc(50%_-_163px)] text-xl leading-[100%] text-center inline-block w-[325px] h-[23px]">
        <p className="m-0">I DS “Alfa” Blok 1</p>
        <p className="m-0">ul. Reymonta 17</p>
        <p className="m-0">30-059 Kraków</p>
        <p className="m-0">zarzad@eestec.pl</p>
      </div>
      <b className="absolute top-[2170px] left-[calc(50%_-_446px)] text-[70px] leading-[100%] text-center">
        <p className="m-0">Learn. Travel. Make Friends.</p>
        <p className="m-0">Improve Yourself</p>
      </b>
      <div
        className="absolute top-[4250px] left-[188px] w-[1065px] h-[461px]"
        data-scroll-to="projectsSectionContainer"
      >
        <div className="absolute top-[0px] left-[calc(50%_-_120.5px)] leading-[100%] font-semibold">
          Projects
        </div>
        <div className="absolute top-[118px] left-[0px] w-[1065px] h-[343px] text-center text-xl">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-crimson w-[255px] h-[343px]" />
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_7px_11.8px_4px_rgba(0,_0,_0,_0.25)] box-border w-[255px] h-[269px] border-[1px] border-solid border-black" />
          <div className="absolute top-[0px] left-[270px] rounded-xl bg-crimson w-[255px] h-[343px]" />
          <div className="absolute top-[0px] left-[270px] rounded-3xs bg-white shadow-[0px_7px_11.8px_4px_rgba(0,_0,_0,_0.25)] box-border w-[255px] h-[269px] border-[1px] border-solid border-black" />
          <div className="absolute top-[0px] left-[540px] rounded-xl bg-crimson w-[255px] h-[343px]" />
          <div className="absolute top-[0px] left-[540px] rounded-3xs bg-white shadow-[0px_7px_11.8px_4px_rgba(0,_0,_0,_0.25)] box-border w-[255px] h-[269px] border-[1px] border-solid border-black" />
          <div className="absolute top-[0px] left-[810px] rounded-xl bg-crimson w-[255px] h-[343px]" />
          <img
            className="absolute top-[-8.8px] left-[794.2px] rounded-3xs w-[286.6px] h-[300.6px]"
            alt=""
            src="/rectangle-22.svg"
          />
          <div className="absolute top-[295px] left-[79px] leading-[100%] font-semibold">
            Hacknarök
          </div>
          <div className="absolute top-[295px] left-[307px] leading-[100%] font-semibold">
            Soft Skills Academy
          </div>
          <div className="absolute top-[295px] left-[618px] leading-[100%] font-semibold">
            Handle IoT
          </div>
          <div className="absolute top-[295px] left-[833px] leading-[100%] font-semibold">
            <p className="m-0">Workshops with Nordic</p>
          </div>
          <img
            className="absolute top-[52px] left-[273px] w-[248px] h-[166px] object-cover"
            alt=""
            src="/ssa8-samo-logo-1@2x.png"
          />
          <img
            className="absolute top-[10px] left-[542px] w-[250px] h-[250px] object-cover"
            alt=""
            src="/hiot3logomale-1@2x.png"
          />
          <img
            className="absolute top-[26px] left-[825px] w-[225px] h-48 object-cover"
            alt=""
            src="/logo-flat-rgb-vertical-1@2x.png"
          />
        </div>
        <img
          className="absolute top-[125px] left-[7px] w-60 h-64 object-cover"
          alt=""
          src="/hack-7logo-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[6505.5px] left-[calc(50%_-_301px)] w-[601px] h-[3px]"
        alt=""
        src="/line-19.svg"
      />
      <div
        className="absolute top-[1347px] left-[188px] w-[1049px] h-[559px]"
        data-scroll-to="aboutUsSection"
      >
        <img
          className="absolute top-[74px] left-[56px] rounded-xl w-[422px] h-[422px] object-cover"
          alt=""
          src="/rectangle-11@2x.png"
        />
        <img
          className="absolute top-[144px] left-[0px] rounded-xl w-[415px] h-[415px] object-cover"
          alt=""
          src="/rectangle-9@2x.png"
        />
        <div className="absolute top-[0px] left-[542px] leading-[100%] font-semibold">
          About us
        </div>
        <div className="absolute top-[82px] left-[542px] text-xl leading-[100%] inline-block w-[520px] h-[501px]">
          <p className="m-0">
            <b className="font-roboto">EESTEC AGH Kraków</b>
            <span>
              {" "}
              is a university student organization - apolitical and non-profit -
              that has been dynamically operating at the AGH University of
              Science and Technology in Krakow for years.
            </span>
          </p>
          <p className="m-0">
            <span>{`We are the local committee of the European student organization `}</span>
            <b className="font-roboto">EESTEC</b>
            <span>
              {" "}
              - Electrical Engineering Students' European assoCiation - which
              connects students of technical faculties.
            </span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <span>{`We have been present at AGH University of Science and Technology since 1998, and although we come from the Electronics Scientific Club, we have been operating independently since 2009. We have particularly close relationships with students and authorities of the `}</span>
            <b className="font-roboto">
              Faculty of Electronics and Telecommunications Computer Science
            </b>
            <span className="font-roboto"> and the</span>
            <b className="font-roboto">
              {" "}
              Faculty of Electrical Engineering, Automatics, Computer Science
              and Biomedical Engineering.
            </b>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We organize regular events such as Soft Skills Academy soft skills
            workshops or the 24-hour Hachnarök hackathon.
          </p>
          <p className="m-0">
            Our members take part in foreign workshops organized by other
            European EESTEC committees, where they gain knowledge and establish
            international contacts.
          </p>
        </div>
        <img
          className="absolute top-[0px] left-[208px] rounded-xl w-[293px] h-[293px] object-cover"
          alt=""
          src="/rectangle-10@2x.png"
        />
      </div>
      <div className="absolute top-[291px] left-[188px] w-[1065px] h-[525px] text-xl">
        <b className="absolute top-[70px] left-[0px] text-[96px] leading-[100%]">
          <p className="m-0">{`Power Your `}</p>
          <p className="m-0">Future</p>
        </b>
        <div className="absolute top-[276px] left-[0px] leading-[100%] inline-block w-[501px] h-20">
          We create local and international projects giving students the
          opportunity to develop leadership and technical skills and learn about
          other cultures.
        </div>
        <div className="absolute top-[356px] left-[0px] rounded-8xs bg-crimson flex flex-row items-center justify-center py-[5px] px-[15px] text-white">
          <b className="relative tracking-[0.05em]">Join us</b>
        </div>
        <img
          className="absolute top-[0px] left-[540px] rounded-xl w-[525px] h-[525px] object-cover"
          alt=""
          src="/rectangle-101@2x.png"
        />
      </div>
      <div className="absolute top-[1078px] left-[calc(50%_-_444px)] text-5xl leading-[100%] text-center inline-block w-[887px] h-[95px]">
        <p className="m-0">
          To unite all students of electrical, IT and related fields to give
          them a sense of belonging and enable them to use their potential in
          academic, professional and private life.
        </p>
      </div>
      <div className="absolute top-[990px] left-[561px] leading-[100%] font-semibold">
        Our Vision
      </div>
      <div
        className="absolute top-[5533px] left-[186px] w-[1067px] h-[786px] text-center text-xl text-black"
        data-scroll-to="contactUsFrame"
      >
        <div className="absolute top-[105px] left-[calc(50%_-_533.5px)] rounded-mini bg-whitesmoke w-[317px] h-[317px]" />
        <div className="absolute top-[105px] left-[calc(50%_-_158.5px)] rounded-mini bg-whitesmoke w-[317px] h-[317px]" />
        <div className="absolute top-[105px] left-[calc(50%_+_216.5px)] rounded-mini bg-whitesmoke w-[317px] h-[317px]" />
        <div className="absolute top-[469px] left-[calc(50%_+_35.5px)] rounded-mini bg-whitesmoke w-[317px] h-[317px]" />
        <div className="absolute top-[469px] left-[calc(50%_-_351.5px)] rounded-mini bg-whitesmoke w-[317px] h-[317px]" />
        <div className="absolute top-[188px] left-[48px] text-9xl leading-[100%] font-medium">
          WERONIKA JACH
        </div>
        <div className="absolute top-[188px] left-[423px] text-9xl leading-[100%] font-medium">
          JULIA PRZYBYŁO
        </div>
        <div className="absolute top-[552px] left-[607px] text-9xl leading-[100%] font-medium">
          NATALIA SŁAWSKA
        </div>
        <div className="absolute top-[552px] left-[254px] text-9xl leading-[100%] font-medium">
          KLAUDIA DYL
        </div>
        <div className="absolute top-[188px] left-[773px] text-9xl leading-[100%] font-medium">
          ALEKSANDRA FURYK
        </div>
        <div className="absolute top-[246px] left-[104px] leading-[100%]">
          Chairperson
        </div>
        <div className="absolute top-[246px] left-[calc(50%_-_120.5px)] leading-[100%]">
          Vice-chairperson, Treasurer
        </div>
        <div className="absolute top-[610px] left-[637px] leading-[100%]">
          <p className="m-0">{`Vice-Chairperson for `}</p>
          <p className="m-0">Human Resources</p>
        </div>
        <div className="absolute top-[610px] left-[246px] leading-[100%]">
          <p className="m-0">{`Vice-Chairperson for `}</p>
          <p className="m-0">External Relations</p>
        </div>
        <div className="absolute top-[243px] left-[808px] leading-[100%]">
          <p className="m-0">{`Vice-Chairperson for `}</p>
          <p className="m-0">International Relations</p>
        </div>
        <a
          className="absolute top-[316px] left-[426px] [text-decoration:underline] leading-[100%] text-crimson"
          href="mailto:julia.przybylo@eestec.pl"
          target="_blank"
        >
          julia.przybylo@eestec.pl
        </a>
        <a
          className="absolute top-[680px] left-[609px] [text-decoration:underline] leading-[100%] text-crimson"
          href="mailto:natalia.slawska@eestec.pl"
          target="_blank"
        >
          natalia.slawska@eestec.pl
        </a>
        <a
          className="absolute top-[680px] left-[243px] [text-decoration:underline] leading-[100%] text-crimson"
          href="mailto:klaudia.dyl@eestec.pl"
          target="_blank"
        >
          klaudia.dyl@eestec.pl
        </a>
        <a
          className="absolute top-[316px] left-[779px] [text-decoration:underline] leading-[100%] text-crimson"
          href="mailto:aleksandra.furyk@eestec.net"
          target="_blank"
        >
          aleksandra.furyk@eestec.net
        </a>
        <div className="absolute top-[0px] left-[calc(50%_-_154.5px)] text-45xl leading-[100%] font-semibold text-whitesmoke">
          Contact us
        </div>
        <a
          className="absolute top-[319px] left-[47px] leading-[100%] text-crimson [text-decoration:none]"
          href="mailto:weronika.jach@eestec.pl"
          target="_blank"
        >
          weronika.jach@eestec.pl
        </a>
      </div>
      <div
        className="absolute top-[2730px] left-[195px] w-[1058px] h-[655px]"
        data-scroll-to="timlineFrameContainer"
      >
        <div className="absolute top-[0px] left-[calc(50%_-_129px)] leading-[100%] font-semibold">
          Timeline
        </div>
        <div className="absolute top-[133px] left-[0px] w-[1058px] h-[511px] overflow-x-auto text-center text-13xl text-white">
          <div className="absolute top-[248px] left-[0px] rounded-8xs bg-crimson w-[4013px] h-[15px]" />
          <div className="absolute top-[139.5px] left-[125.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[668.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[1212.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[1756.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[2300.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[2844.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[3388.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[139.5px] left-[3932.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-crimson" />
          <div className="absolute top-[284.5px] left-[398.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[284.5px] left-[940.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[296px] left-[2738px] rounded-3xs bg-gainsboro w-[215px] h-[215px]" />
          <div className="absolute top-[80px] left-[592px] w-[156px] h-14">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Handle IoT
            </div>
            <div className="absolute top-[38px] left-[45px] text-mini">
              July, 2022
            </div>
          </div>
          <div className="absolute top-[42px] left-[6px] w-[237px] h-[94px]">
            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[237px]">
              <p className="m-0">{`Workshops with `}</p>
              <p className="m-0">Allegro</p>
            </div>
            <div className="absolute top-[76px] left-[85px] text-mini">
              April, 2022
            </div>
          </div>
          <div className="absolute top-[390px] left-[307px] w-[181px] h-14">
            <div className="absolute top-[18px] left-[0px] font-medium">
              Hacknarök 6
            </div>
            <div className="absolute top-[0px] left-[54px] text-mini">
              April, 2022
            </div>
          </div>
          <div className="absolute top-[34px] left-[1126px] w-44 h-[102px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              <p className="m-0">{`Autumn `}</p>
              <p className="m-0">Recruitment</p>
            </div>
            <div className="absolute top-[84px] left-[42px] text-mini">
              October, 2022
            </div>
          </div>
          <div className="absolute top-[34px] left-[1665px] w-[187px] h-[102px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              <p className="m-0">{`Soft Skills `}</p>
              <p className="m-0">Academy  13</p>
            </div>
            <div className="absolute top-[84px] left-[39px] text-mini">
              December, 2022
            </div>
          </div>
          <div className="absolute top-[34px] left-[2196px] w-[213px] h-[102px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              <p className="m-0">Workshop with</p>
              <p className="m-0">Nordic</p>
            </div>
            <div className="absolute top-[84px] left-[65px] text-mini">
              March, 2023
            </div>
          </div>
          <div className="absolute top-[34px] left-[2753px] w-[186px] h-[102px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              <p className="m-0">{`Motivational `}</p>
              <p className="m-0">Weekend 2</p>
            </div>
            <div className="absolute top-[84px] left-[57px] text-mini">
              April, 2023
            </div>
          </div>
          <div className="absolute top-[34px] left-[3302px] w-44 h-[102px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              <p className="m-0">Autumn</p>
              <p className="m-0">Recruitment</p>
            </div>
            <div className="absolute top-[84px] left-[42px] text-mini">
              October, 2023
            </div>
          </div>
          <div className="absolute top-[34px] left-[3845px] w-[179px] h-[102px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              <p className="m-0">{`Soft Skills `}</p>
              <p className="m-0">Academy 14</p>
            </div>
            <div className="absolute top-[84px] left-[35px] text-mini">
              December, 2023
            </div>
          </div>
          <div className="absolute top-[390px] left-[877px] w-[130px] h-14">
            <div className="absolute top-[18px] left-[0px] font-medium">
              14th T4T
            </div>
            <div className="absolute top-[0px] left-[32px] text-mini">
              July, 2022
            </div>
          </div>
          <div className="absolute top-[239px] left-[108px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[380px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[652px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[924px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[1196px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[1468px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[1744px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[2012px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[2284px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[2556px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[2828px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[3101px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[3372px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[3644px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <div className="absolute top-[239px] left-[3916px] rounded-[50%] bg-white box-border w-[34px] h-[34px] border-[7px] border-solid border-black" />
          <img
            className="absolute top-[296px] left-[18px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className="absolute top-[0px] left-[290px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group1@2x.png"
          />
          <img
            className="absolute top-[296px] left-[562px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group2@2x.png"
          />
          <img
            className="absolute top-[0px] left-[834px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group3@2x.png"
          />
          <img
            className="absolute top-[296px] left-[1106px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <div className="absolute top-[284.5px] left-[1484.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[284.5px] left-[2028.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[284.5px] left-[2572.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[284.5px] left-[3118.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[284.5px] left-[3660.5px] box-border w-[3px] h-[87px] border-r-[3px] border-solid border-whitesmoke" />
          <div className="absolute top-[0px] left-[1378px] rounded-3xs bg-gainsboro w-[215px] h-[215px]" />
          <div className="absolute top-[0px] left-[3554px] rounded-3xs bg-gainsboro w-[215px] h-[215px]" />
          <div className="absolute top-[390px] left-[1396px] w-[179px] h-[94px]">
            <div className="absolute top-[18px] left-[0px] font-medium">
              <p className="m-0">Motivational</p>
              <p className="m-0">{`weekend 1 `}</p>
            </div>
            <div className="absolute top-[0px] left-[36px] text-mini">
              November, 2022
            </div>
          </div>
          <div className="absolute top-[390px] left-[1942px] w-44 h-[94px]">
            <div className="absolute top-[18px] left-[0px] font-medium">
              <p className="m-0">Spring</p>
              <p className="m-0">Recruitment</p>
            </div>
            <div className="absolute top-[0px] left-[47px] text-mini">
              March, 2023
            </div>
          </div>
          <div className="absolute top-[390px] left-[2484px] w-[181px] h-14">
            <div className="absolute top-[18px] left-[0px] font-medium">
              Hacknarök 7
            </div>
            <div className="absolute top-[0px] left-[54px] text-mini">
              April, 2023
            </div>
          </div>
          <div className="absolute top-[390px] left-[2995px] w-[251px] h-[94px]">
            <div className="absolute top-[18px] left-[0px] font-medium">
              <p className="m-0">{`25th Anniversary `}</p>
              <p className="m-0">Gala</p>
            </div>
            <div className="absolute top-[0px] left-[91px] text-mini">
              May, 2023
            </div>
          </div>
          <div className="absolute top-[390px] left-[3569px] w-[186px] h-[94px]">
            <div className="absolute top-[18px] left-[0px] font-medium">
              <p className="m-0">{`Motivational `}</p>
              <p className="m-0">Weekend</p>
            </div>
            <div className="absolute top-[0px] left-[39px] text-mini">
              November, 2023
            </div>
          </div>
          <img
            className="absolute top-[296px] left-[1650px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <img
            className="absolute top-[0px] left-[1922px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <img
            className="absolute top-[296px] left-[2194px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <img
            className="absolute top-[0px] left-[2466px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <img
            className="absolute top-[0px] left-[3010px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <img
            className="absolute top-[296px] left-[3282px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
          <img
            className="absolute top-[296px] left-[3826px] w-[215px] h-[215px] object-cover"
            alt=""
            src="/mask-group4@2x.png"
          />
        </div>
      </div>
      <div
        className="absolute top-[4951px] left-[419px] w-[602px] h-[232px]"
        data-scroll-to="partnersFrameContainer"
      >
        <div className="absolute top-[103px] left-[calc(50%_-_721px)] bg-white w-[1441px] h-[239px]" />
        <div className="absolute top-[0px] left-[calc(50%_-_124px)] leading-[100%] font-semibold">
          Partners
        </div>
        <img
          className="absolute top-[182px] left-[calc(50%_-_277px)] w-[553px] h-[82px] object-cover"
          alt=""
          src="/nowe-logo-hidaainnovationcenterlockupkrakowq42022-1-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[6377px] left-[calc(50%_-_86px)] w-[172px] h-[122px] object-cover cursor-pointer"
        alt=""
        src="/agh-krakow-white-1@2x.png"
        onClick={onAGHKrakowWhite1Image1Click}
      />
      <div className="absolute top-[2379px] left-[calc(50%_-_36px)] leading-[100%] font-medium text-crimson text-center">
        42
      </div>
      <div className="absolute top-[2379px] left-[calc(50%_+_278px)] leading-[100%] font-medium text-crimson">
        24
      </div>
      <div className="absolute top-[2379px] left-[calc(50%_-_423px)] leading-[100%] font-medium text-crimson text-right">
        5000
      </div>
      <div className="absolute top-[2450px] left-[calc(50%_-_435px)] text-21xl leading-[100%] text-center">
        Members
      </div>
      <div className="absolute top-[2450px] left-[calc(50%_-_103px)] text-21xl leading-[100%] text-center">
        Universities
      </div>
      <div className="absolute top-[2450px] left-[calc(50%_+_229px)] text-21xl leading-[100%] text-center">
        Countries
      </div>
      <div className="absolute top-[3642px] left-[calc(50%_+_56px)] text-5xl leading-[100%] inline-block w-[483px] h-[336px]">
        AleWorkshops in cooperation with Allegro provided participants with both
        technical knowledge and soft skills. Three hard skill workshops and
        three soft skill workshops during three weeks provided knowledge to
        almost 120 participants.
      </div>
      <div className="absolute top-[3517px] left-[776px] text-[48px] font-semibold text-white">
        <p className="m-0">Workshops with</p>
        <p className="m-0">Allegro</p>
      </div>
      <img
        className="absolute top-[3485px] left-[213px] w-[525px] h-[525px] object-cover"
        alt=""
        src="/mask-group5@2x.png"
      />
    </div>
  );
};

export default Desktop1;
