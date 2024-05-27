import chatIcon from "../../assets/icon-chat.svg";
import moneyIcon from "../../assets/icon-money.svg";
import securityIcon from "../../assets/icon-security.svg";
import FeatureItem from "./FeatureItem";

const itemsForFeature = {
  chat: {
    icon: chatIcon,
    title: "You are our first priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  money: {
    icon: moneyIcon,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  security: {
    icon: securityIcon,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
};

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        icon={itemsForFeature.chat.icon}
        title={itemsForFeature.chat.title}
        text={itemsForFeature.chat.text}
      />
      <FeatureItem
        icon={itemsForFeature.money.icon}
        title={itemsForFeature.money.title}
        text={itemsForFeature.money.text}
      />
      <FeatureItem
        icon={itemsForFeature.security.icon}
        title={itemsForFeature.security.title}
        text={itemsForFeature.security.text}
      />
    </section>
  );
}

export default Features;
