import DialogItem from "../../../components/dialogItem/DialogItem";
import "./TopicContent.css";
const VISITOR = "visitor";
const HOST = "host";
export default function TopicContent() {
  return (
    <article className="topic__content">
      <h3 className="content__title">Greetings:</h3>
      <DialogItem type={HOST}>
        Seller man: Good morning Sir, how can I help you ?
      </DialogItem>
      <DialogItem type={VISITOR}>
        Customer: I want some medicine please.
      </DialogItem>
      <DialogItem type={HOST}>
        Seller man: Sure, what kind of medicine do you need ?
      </DialogItem>
      <DialogItem type={VISITOR}>
        Customer: I need something for my throat.
      </DialogItem>
    </article>
  );
}
