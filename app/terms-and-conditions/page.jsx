import React from "react";

const arabicRule = [
  "التسجيل مجاني ومتاح لجميع المشاركين في الكويت والخليج من عمر 18 سنة فما فوق.",
  "المشاركة تكون ضمن فريق مكوّن من 4 أشخاص فقط عبر تطبيق TikTok.",
  "يجب الالتزام بوقت البث المباشر/المباراة حسب الجدول المعلن مسبقًا.",
  "المشاركة تعني الموافقة على ظهور الحسابات والفيديوهات ضمن التغطية الإعلامية للبطولة.",
  "يُمنع استخدام أي أدوات أو برامج تمنح أفضلية غير عادلة (مثل الغش أو التلاعب في النتائج).",
  "يُمنع السلوك غير اللائق مثل الألفاظ النابية أو أي تصرف مسيء. أي مخالفة تؤدي إلى الإقصاء الفوري.",
  "قرارات إدارة البطولة نهائية وغير قابلة للنقاش.",
  "الانسحاب من البطولة يعتبر خروج نهائي وفقدان أي فرصة للعودة.",
  "في حال التعادل يتم اللجوء إلى جولة إضافية سريعة لتحديد الفائز.",
  "الجوائز تُمنح للفائزين كما هو معلن من قبل اللجنة المنظمة.",
  "التسجيل والمشاركة تعني الموافقة الكاملة على جميع الشروط والأحكام دون استثناء.",
];

const englishRule = [
  "Registration is free and open to participants from Kuwait and the GCC aged 18 and above.",
  "Participation is limited to teams of 4 players only via TikTok.",
  "Participants must join the live stream/match at the scheduled time.",
  "By participating, you agree that your accounts and videos may appear in the official coverage of the championship.",
  "The use of any tools, software, or methods that provide unfair advantages (such as cheating or result manipulation) is strictly prohibited.",
  "Offensive language, inappropriate behavior, or misconduct will lead to immediate disqualification.",
  "All decisions made by the championship organizers are final and non-contestable.",
  "Withdrawal from the championship means permanent elimination with no return.",
  "In case of a tie, a quick extra round will determine the winner.",
  "Prizes will be awarded to the winners as officially announced by the organizing committee.",
  "Registration and participation indicate full acceptance of all rules and regulations without exception.",
];

const Page = () => {
  return (
    <div className="page-container pt-10">
      <div dir={"rtl"} className="w-full flex flex-col">
        <h1 className="font-bold text-2xl text-content">
          قوانين وشروط بطولة زين x فلته
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
