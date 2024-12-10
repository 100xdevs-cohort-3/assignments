import questions from "../questions.json";
import CheckImg from "../assets/check.svg";

const Questions = () => {
  return (
    <>
      <div className="w-full flex flex-col mt-6 ">
        {questions.map((q, index) => {
          return (
            <div
              key={q.q_id}
              className={`${
                index % 2 === 0 ? "bg-secondaryColor" : ""
              } rounded-md `}
            >
              <div className="flex items-start sm:items-center gap-2 px-4 py-2 sm:p-2 text-sm ">
                <span className="px-4">
                  <img src={CheckImg} alt="check-img" className="w-3 h-3" />
                </span>
                <span>{q.q_id}</span>
                <p className="flex w-full gap-3 justify-between pr-3 items-start sm:items-center md:pr-16">
                  <span>{q.qname}</span>

                  <span className=" gap-2 flex-col sm:flex-row hidden">
                    {q.tags.map((t, i) => {
                      return <span className="bg-primaryColor text-gray-400 px-2 py-1 rounded-lg" key={i}>{t}</span>;
                    })}
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
    </>
  );
};

export default Questions;
