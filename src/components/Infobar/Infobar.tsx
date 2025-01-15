import Container from "../Container";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
const month = months[date.getMonth()];

function InfobarText() {
  return (
    <>
      <p className="text-gray-300 text-sm leading-4">{`${month}, ${day}`}</p>
      <p className="text-white text-base leading-6">{`1/8 Tasks`}</p>
      <p className="text-white text-lg leading-4 font-semibold underline underline-offset-2">{`Completed`}</p>
    </>
  );
}

export default function Infobar() {
  return (
    <Container className="min-w-full h-[4.5rem] rounded-xl bg-primary-purple-800 py-2 px-3 gap-0">
      <InfobarText />
    </Container>
  );
}
