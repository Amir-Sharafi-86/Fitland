import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
interface ExerciseDetailsProp {
  delay?: number | null | string;
  duration?: number | string;
  img: string;
  title: string;
  price : number | string
  size : number | string
  isTrue : boolean | string
}

function ExerciseDetails(props: ExerciseDetailsProp) {
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href={"/"}>
      <div
        className="main-box__content mb-20 border border-[#CBCBCB] bg-white rounded-2xl"
        data-aos="fade-up"
        data-aos-delay={props.delay ?? undefined}
        data-aos-duration={props.duration}
      >
        <img src={props.img} className="rounded-sm w-full" alt={props.title} />

        <span className="text-black-main font-MorabbaBold text-base md:text-2xl pt-4 pr-2.5 block">
          {props.title}
        </span>

        <p className="max-w-[316px] md:max-w-[516px] text-xs md:text-base mt-4 mb-7 text-black-main font-MorabbaBold pr-2">
          خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل جاری
          قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین وی گفت...
        </p>
      </div>
    </Link>
  );
}

export default ExerciseDetails;
