import Card from '@material-tailwind/react/Card'
import CardImage from '@material-tailwind/react/CardImage'
import CardBody from '@material-tailwind/react/CardBody'
import Icon from '@material-tailwind/react/Icon'
import H4 from '@material-tailwind/react/Heading4'
import H6 from '@material-tailwind/react/Heading6'
import LeadText from '@material-tailwind/react/LeadText'
import Paragraph from '@material-tailwind/react/Paragraph'
import StatusCard from 'components/landing/StatusCard'
import Teamwork from 'assets/img/teamwork.jpeg'

export default function WorkingSection () {
  return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="stars" title="Our Methodology">
                        We position our clients for success with our Five Point software delivery methodology that develops a strategy for organizational growth, identifies effective requirements, finds shared values, develops delivery cadence and maintains rigorous quality standards.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="autorenew"
                        title="Scalable Solutions"
                    >
                        Delivering personalized, scalable solutions is the key to our success. Using proven, state of the art technology we build to address real world challenges.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="fingerprint"
                        title="Future Facing"
                    >
                        Our goal is to design best in class digital services, allowing us to help our partners grow with us.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is our passion</H4>
                        <LeadText color="blueGray">
                            Whether consulting on an discovery engagement or developing the digital experiences, technology is our passion.
                        </LeadText>
                        <LeadText color="blueGray">
                            Our background is diverse and encompasses thought leadership in custom development, to developing on proprietary platforms such as Sitecore, Salesforce, AEM and more, Integration with existing systems is a strength and achieving syngergy across software silos is a key pillar of our success.
                        </LeadText>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Lift Off With Us</H6>
                                <Paragraph color="blueGray">
                                    Our omnichannel approach is more than just collaboration. It is an obsession to see customers grow, to innovate and deliver long-lasting value in all our engagements.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
  )
}
