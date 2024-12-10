/* eslint-disable react/prop-types */
// import questions from "../questions.json";
import CheckImg from "../assets/check.svg";

const Questions = ({ questions, filterData }) => {
  return (
    <>
      <div className="w-full h-[550px] flex flex-col mt-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
        {questions.length == 0 ? (
          <div className="bg-secondaryColor flex items-center justify-center text-gray-400 w-full sm:items-center gap-2 px-4 py-2 sm:p-2 text-sm rounded-md">
            <p>no question found</p>
          </div>
        ) : (
          <div>
            {questions.map((q, index) => {
              return (
                <div
                  key={q.q_id}
                  className={`${
                    index % 2 === 0 ? "bg-secondaryColor" : ""
                  } rounded-md `}
                >
                  <div className="flex items-start sm:items-center gap-2 px-4 py-2 sm:p-2 text-sm ">
                    <span className="sm:px-4">
                      <img src={CheckImg} alt="check-img" className="w-3 h-3 mt-2 sm:mt-0" />
                    </span>
                    <span>{q.q_id}</span>
                    <p className="flex w-full  gap-3 justify-between pr-3 items-center lg:pr-3 xl:pr-16 sm:py-1">
                      <span className="flex flex-col sm:items-center sm:flex-row justify-between w-full relative">
                        <span
                          className={`${
                            filterData.showtags ? "w-full sm:w-2/5" : ""
                          } `}
                        >
                          {q.qname}
                        </span>

                        <span
                          className={`w-3/5 gap-2 items-center sm:justify-center text-center  ${
                            filterData.showtags ? "flex" : "hidden"
                          }`}
                        >
                          {q.tags.map((t, i) => {
                            return (
                              <span
                                className=" bg-primaryColor text-gray-400 px-[2px] sm:px-2 sm:py-1  text-[8px] sm:text-sm  rounded-lg"
                                key={i}
                              >
                                {t}
                              </span>
                            );
                          })}
                        </span>
                      </span>

                      <span
                        className={`${
                          q.category === "Easy"
                            ? "text-easyTextColor"
                            : q.category === "Medium"
                            ? "text-mediumTextColor"
                            : "text-hardTextColor"
                        }`}
                      >
                        {q.category}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Questions;
