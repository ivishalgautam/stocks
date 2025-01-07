import React from "react";
import PageSection from "./page-section";
import EnquiryForm from "./forms/enquiry";
import Image from "next/image";
import Heading from "./heading";
import Balancer from "react-wrap-balancer";
import { Muted } from "./typography";
import { CTA } from "./navbar";

export default function EnquirySection() {
  return (
    <PageSection className={"space-y-4"}>
      <Heading
        title="Enquiry"
        para="Fill out the enquiry form to seamlessly buy or sell unlisted shares. Our experts ensure secure, transparent, and hassle-free transactions tailored to your needs!"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-gray-50 p-8 rounded-2xl">
          <EnquiryForm />
        </div>
        <div className="bg-blue-100 rounded-2xl p-8 space-y-10">
          <div className="space-y-2">
            <div className="text-center text-xl font-semibold">
              Attention required
            </div>
            <Muted className={"text-center"}>
              <Balancer>
                Create your account and begin trading with us to get the best
                experience.
              </Balancer>
            </Muted>
          </div>

          <div className="flex items-center justify-center !mb-20">
            <CTA />
          </div>

          <div className="">
            <figure>
              <Image src={"/enquiry.svg"} width={300} height={300} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
