import React from "react";

const arabicRule = [
  "التسجيل مجاني ومتاح فقط للكويتيين من عمر 18 إلى 34 سنة.",
  "يتكون الفريق من شخصين إلى أربعة أشخاص.",
  "الالتزام بالحضور قبل موعد المباراة بـ 15 دقيقة.",
  "الموافقة على التصوير والنشر ضمن تغطية البطولة.",
  "يُمنع الغش أو استخدام أي وسيلة تمنح أفضلية غير عادلة، وأي مخالفة تؤدي إلى الإقصاء.",
  "يُمنع السلوك غير الرياضي مثل التلفظ بألفاظ نابية أو التصرف العدواني، وأي تجاوز يؤدي إلى خصم نقاط أو الإقصاء.",
  "قرارات الحكام نهائية وغير قابلة للنقاش.",
  "الانسحاب من البطولة يعني خروج الفريق نهائيًا.",
  "في حال التعادل بالنقاط، يتم اللجوء إلى مباراة فاصلة من فئة واحدة فقط لتحديد الفائز.",
  "الجوائز تُمنح للفريق ككل وليس لشخص واحد فقط.",
  "التسجيل والمشاركة تعني الموافقة على جميع القوانين دون استثناء.",
];

const englishRule = [
  "Registration is free and open only to Kuwaiti nationals aged 18 to 34.",
  "Each team must consist of 2 to 4 players.",
  "Participants must arrive at least 15 minutes before their scheduled match.",
  "Participants must agree to be filmed and have their images used in the championship coverage.",
  "Cheating or using any unfair advantage is strictly prohibited. Any violation will result in disqualification.",
  "Unsportsmanlike behavior, such as using offensive language or aggressive actions, will result in point deductions or disqualification.",
  "Referees' decisions are final and cannot be contested.",
  "Withdrawing from the championship means the team is eliminated permanently.",
  "In case of a tie, a tiebreaker match from a single category will determine the winner.",
  "Prizes are awarded to the team as a whole, not to individual players.",
  "Registration and participation indicate full acceptance of all rules without exception.",
];

const Page = () => {
  return (
    <div className="page-container pt-10">
      <div dir={"rtl"} className="w-full flex flex-col">
        <h1 className="font-bold text-2xl text-content">
          قوانين وشروط بطولة زين x نقاط
        </h1>
        <ol className="w-full flex flex-col items-start list-decimal text-content px-6 mt-5 gap-1">
          {arabicRule.map((item, i) => {
            return (
              <li key={i} className="font-semibold text-lg">
                {item}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="w-full flex flex-col mt-10">
        <h1 className="font-bold text-2xl text-content">
          Zain x Nuqat Championship Rules and Regulations
        </h1>
        <ol className="w-full flex flex-col items-start list-decimal text-content px-6 mt-5 gap-1">
          {englishRule.map((item, i) => {
            return (
              <li key={i} className="font-regular text-lg">
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Page;
