import React from "react";
import ComponentWrapper from "./components/Shared/Wrappers/ComponentWrapper";
function Bio() {
  return (
    <ComponentWrapper style={`bg-springGreen py-[6rem]  text-electricPurple`}>
      <h1 className="font-anton text-center text-[4rem]">Company Bio</h1>
      <p className="font-sansNarrow text-justify md:px-28 lg:px-[15rem] pt-[2rem] leading-[2rem] text-[1.25rem]">
        Silk Route is an immigration consultancy firm that specializes in
        helping individuals gain permanent residency in the European Union via
        business development. We pride ourselves on being one of the best
        residency programs in Europe, and that begins with knowing our clients
        through and through. Taking into account their educational background,
        work experience, and areas of expertise, we design and plant companies
        in Latvia that establish EU residency, all while ensuring control of the
        company stays in the client’s hands. We find great satisfaction in
        providing our customers with the highest quality of support and care
        from the earliest stages of the process to when they finally settle into
        their new homes. Our team of experienced immigration lawyers and board
        of advisors are experts in their respective fields, and because they
        understand the migration process inside and out, they know how to take
        the fear out of the unknown. With headquarters located in the
        Netherlands, and branch offices in Riga and Delhi, Silk Route aims to
        advise, assist, and accompany our clients throughout the entire
        migration process.
      </p>
    </ComponentWrapper>
  );
}
export default Bio;
