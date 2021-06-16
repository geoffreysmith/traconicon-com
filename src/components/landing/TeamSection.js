import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Our Roots">
                    Our team has extensive experience ranging from SpaceX, Microsoft Research to more traditional firms such as Exxon Mobil, Honda, ConEd, Duke Energy and Honeywell.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        name="Geoffrey Smith"
                        position="Managing Director"
                        email="geoff@traconicon.com"
                    />
                    <TeamCard
                        name="Alex Audretsch"
                        position="Chief Technology Officer"
                        email="alex@traconicon.com"
                    />
                    <TeamCard
                        name="Rick Khoury"
                        position="Chief Client Officer"
                        email="rick@traconicon.com"
                    />
                </div>
            </div>
        </section>
    );
}
