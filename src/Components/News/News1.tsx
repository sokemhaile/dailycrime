const News1 = () => {
  return (
    <div className="flex flex-row justify-between gap-5 my-8">
      <div className="basis-1/2">
        <div className="pb-3">
          <h1 className="font-TimesNewRoman font-extrabold text-5xl">
            The Tragic Reality: Girls Facing Rape and Fatal Harassment
          </h1>
        </div>
        <div className="flex flex-row gap-3 text-justify text-sm">
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex flex-col gap-0.5">
              <p>
                <span className="high">R</span>ape and harassment are brutal realities that many girls face, 
                leaving physical scars, emotional trauma, and, in some cases, claiming their lives. 
                In Ethiopia, cases of young girls subjected to sexual violence, often followed by harassment and even death, 
                have shocked communities and highlighted the urgent need for action. 
                The rising reports of such heinous crimes reflect deep-seated issues of gender inequality, 
                lack of legal accountability, and harmful cultural norms that perpetuate violence against women.
              </p>
              <p>
                Beyond the immediate physical harm, these crimes leave lasting emotional scars on survivors, 
                families, and communities. The fear and stigma surrounding these issues often prevent victims from speaking out, 
                allowing perpetrators to evade justice. Stronger societal and legal responses are crucial to ending this cycle of violence.
              </p>
            </div>
            <div>
              <h1 className="text-xl">
                Understanding the Root Causes of Gender-Based Violence
              </h1>
            </div>
            <div>
              <p>
                Gender-based violence stems from various factors, including deep-rooted gender inequality, 
                lack of education on consent, and societal attitudes that normalize harassment. 
                Poverty and economic disparity further exacerbate the issue, leaving many girls vulnerable to exploitation. 
                Additionally, inadequate enforcement of laws against offenders creates an environment where crimes go unpunished.
              </p>
              <p>
                These crimes are often fueled by cultural norms that silence victims and embolden aggressors. 
                Many young girls lack access to safe spaces or support systems, increasing their vulnerability to violence.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <p>
                Harassment often escalates to fatal violence, leaving families in despair and communities outraged. 
                Stories of girls being attacked and murdered after facing prolonged harassment serve as harrowing reminders of the urgent need for action. 
                Empowering women through education, economic opportunities, and legal protections is essential to breaking this cycle.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/IMG/crimeGIFS/a-6.gif" alt="crime_awareness" />
            </div>
            <div>
              <p>
                Changing societal attitudes is critical. Education on consent, respect, and equality should begin at a young age. 
                Schools, families, and community leaders must work together to challenge harmful norms and promote values that prioritize safety and respect for all.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <p>
              Tackling gender-based violence requires a comprehensive approach. Stronger laws, 
              better enforcement, and community-based support systems are essential to protecting girls and ensuring justice for survivors. 
              Empowering girls with knowledge and resources can help them stand against abuse and reclaim their rights.
            </p>
            <h1 className="text-xl">
              Remembering the Lost Lives: A Call to Action
            </h1>
            <div className="flex flex-col gap-0.5">
              <p>
                The stories of girls who lost their lives to rape and harassment should ignite a collective responsibility to act. 
                These tragedies are not isolated incidents but reflections of systemic failures. 
                Communities must come together to support survivors, hold perpetrators accountable, 
                and create an environment where such crimes are no longer tolerated.
              </p>
              <p>
                By fostering open dialogues, raising awareness, and challenging harmful stereotypes, 
                society can take meaningful steps toward ending violence against women. Let these stories serve as a catalyst for change, 
                reminding us of the importance of creating a world where every girl can live free from fear and harm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <img src="/IMG/crimeGIFS/a-3.gif" className="h-[500px] object-cover" alt="justice_for_victims" />
        <div className="flex gap-4 text-justify">
          <div className="flex-1 flex flex-col gap-1.5">
            <div>
              <h1 className="text-3xl">
                Fighting for Justice: Honoring the Victims
              </h1>
            </div>
            <div className="flex flex-col gap-0.5">
              <p>
                To honor the lives lost to gender-based violence, communities must unite to demand justice and reform. 
                This includes improving access to legal services, supporting survivors with counseling, and building awareness campaigns 
                to address the stigma surrounding such issues. Everyone has a role to play in creating a safer society.
              </p>
              <p>
                Preventing these tragedies begins with empowering young girls and boys with the knowledge and tools to challenge violence. 
                A society that values equality and respect lays the foundation for a future free from fear.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-0.5">
            <p>
              Every case of harassment and violence is a call to action. Let us remember the victims by working toward a society where 
              such crimes are no longer a reality. Together, we can honor their memory by building a world where all girls feel safe, valued, and protected.
            </p>
            <p>
              Let us strive for justice, accountability, and change, ensuring that no girl ever has to face such violence again. 
              By addressing the root causes and supporting survivors, we can create a safer, more equitable future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News1;
