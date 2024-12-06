const News2 = () => {
  return (
    <div className=" ">
      <div className=" flex gap-2">
        <div className=" basis-1/5 text-justify border-r-2 border-zinc-700 pr-2 flex flex-col gap-2">
          <div>
            <img
              src="/IMG/crimeGIFS/b-1.gif"
              alt="news_img"
              className=" object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl">
              Is the Government Really Making Our Safety a True Priority?
            </h1>
          </div>
          <div className=" flex flex-col gap-0.5">
            <p>
              Ethiopia faces mounting safety concerns, from arms trafficking to ethnic
              conflicts. Porous borders have fueled the influx of illicit arms,
              increasing violence in urban and rural areas alike. Despite efforts to
              maintain political stability, the lack of adequate investment in crime
              prevention programs leaves many communities vulnerable. Critics argue
              that prioritizing political stability over safety undermines public trust.
            </p>
            <p>
              Addressing these challenges requires strengthening law enforcement and
              empowering communities. Programs aimed at fostering community-police
              collaboration and investing in education, job training, and mental health
              services can create safer environments. Without decisive action, citizens
              will continue to feel unprotected and underserved.
            </p>
          </div>
        </div>
        <div className=" basis-4/5 flex gap-5">
          <div className=" basis-3/5 flex flex-col gap-3">
            <div>
              <h1 className=" text-4xl">
                Why Is the Government Ignoring National Issues for Regional Priorities?
              </h1>
            </div>
            <div className=" flex gap-3 text-sm text-justify ">
              <div className=" flex-1 flex flex-col gap-1.5">
                <p>
                  <span className="high">T</span>he government’s focus on regional
                  political conflicts has overshadowed urgent national issues, such as
                  human trafficking and cybercrimes. Illicit trade networks thrive in
                  the absence of a cohesive national strategy, exacerbating economic
                  disparities and security vulnerabilities. The lack of action to
                  address the root causes of crime leads to unequal access to justice
                  across the country.
                </p>
                <p>
                  Without a national approach, many regions, particularly conflict
                  zones like Tigray and Oromia, face higher rates of violence and
                  smuggling. Citizens demand equal attention and resources to tackle
                  these pressing issues. A united effort is needed to restore public
                  trust and ensure safety for all Ethiopians.
                </p>
              </div>
              <div className=" flex-1 flex flex-col gap-2">
                <p>
                  Effective governance requires balancing regional and national
                  priorities. By collaborating with local leaders and community
                  organizations, the government can develop strategies to combat crime
                  while addressing the root causes of conflict. Investments in
                  technology and training for law enforcement can help tackle rising
                  cybercrimes and other emerging threats.
                </p>
                <div>
                  <img src="/IMG/crimeGIFS/a-1.gif" className="object-cover" />
                </div>
                <p>
                  A transparent and fair allocation of resources will ensure that
                  vulnerable regions are not left behind. Building strong community
                  support systems, such as hotlines and victim shelters, can help
                  address fears and restore a sense of security across Ethiopia.
                </p>
              </div>
              <div className=" flex-1 flex flex-col gap-1.5">
                <p>
                  The government must recognize the importance of a national crime
                  prevention strategy. Citizens are calling for leadership that
                  addresses systemic issues like corruption and unequal law
                  enforcement. Coordinating efforts between national and local entities
                  can strengthen justice and safety nationwide.
                </p>
                <p>
                  By listening to public concerns and investing in inclusive solutions,
                  Ethiopia can tackle crime more effectively. Collaborative action is
                  essential to creating a future where all citizens feel valued and
                  secure in their communities.
                </p>
              </div>
            </div>
          </div>
          <div className=" text-justify basis-2/5 border-2 border-zinc-700 p-2 flex flex-col gap-4">
            <div>
              <img
                src="/IMG/crimeGIFS/pm.gif"
                alt="news_img"
                className=" object-cover grayscale"
              />
            </div>
            <div>
              <p>
                The Prime Minister has faced criticism for prioritizing political
                stability over addressing rising crime rates. Issues like arms
                trafficking, smuggling, and wildlife trade remain unchecked,
                destabilizing the nation. Localized focus on certain regions leaves
                other areas underserved and unsafe.
              </p>
              <p>
                Strengthening law enforcement, addressing corruption, and increasing
                support for victims are critical steps to restoring public trust.
                Leadership must focus on ensuring safety and justice for all citizens,
                not just a select few.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News2;
