import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

export default function LandingTeamCard({name, position, email }) {
    return (
        <div className="w-full md:w-8/14 lg:w-3/14 lg:mb-0 mb-14 px-4">
            <div className="px-8">
                <div className="pt-8 text-center">
                    <H6 color="gray">{name}</H6>
                    <a color="blueGrey" href={`mailto:${email}`}>{email}</a>
                    <Paragraph color="blueGray">{position}</Paragraph>
                </div>
            </div>
        </div>
    );
}
