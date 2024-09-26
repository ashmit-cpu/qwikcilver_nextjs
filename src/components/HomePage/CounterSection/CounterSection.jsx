"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "../../../styles/CounterSection.css";

const CounterCard = ({
  end,
  duration,
  title,
  prefix = "",
  suffix = "",
  prefixClassName = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(counterRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="CounterSection" ref={counterRef}>
      <div className="col">
        {isVisible && (
          <>
            <span className={`counter-prefix ${prefixClassName}`}>
              {prefix}
            </span>
            <CountUp end={end} duration={duration} />
            <span className="counter-suffix">{suffix}</span>
          </>
        )}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

function CounterSection({ data }) {
  return (
    <div className="CounterSection">
      <div className="container sec-padding">
        {data.acf.counter_section_value_first_column &&
          data.acf.counter_section_title_first_column && (
            <CounterCard
              end={data.acf.counter_section_value_first_column}
              duration={3}
              suffix="+M"
              title={data.acf.counter_section_title_first_column}
            />
          )}
        {data.acf.counter_section_value_second_column &&
          data.acf.counter_section_title_second_column && (
            <CounterCard
              end={data.acf.counter_section_value_second_column}
              duration={3}
              prefix="$"
              suffix="B"
              prefixClassName="special-prefix"
              title={data.acf.counter_section_title_second_column}
            />
          )}
        {data.acf.counter_section_value_third_column &&
          data.acf.counter_section_title_third_column && (
            <CounterCard
              end={data.acf.counter_section_value_third_column}
              duration={3}
              suffix="+"
              title={data.acf.counter_section_title_third_column}
            />
          )}
        {data.acf.counter_section_value_fourth_column &&
          data.acf.counter_section_title_fourth_column && (
            <CounterCard
              end={data.acf.counter_section_value_fourth_column}
              duration={3}
              suffix="+"
              title={data.acf.counter_section_title_fourth_column}
            />
          )}
      </div>
    </div>
  );
}

export default CounterSection;
