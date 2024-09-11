import * as widget from "../lib/widget";
import MessageList from "../devtool/MessageList";

const WidgetButton = ({ shopId, shopName }) => {
  const onClick = () => {
    // 💡 Open the widget with the Ikeono shop UUID, with an optional prefilled message.
    widget.open(shopId, `Hola ${shopName}`);
  };

  return (
    <button style={{ padding: "8px" }} onClick={onClick}>
      Open widget for {shopName}
    </button>
  );
};

const Header = ({ shopId, shopName }) => (
  <>
    <h1 style={{ marginTop: "0px" }}>
      {shopName} <small>{shopId}</small>
    </h1>
    <p>This is an example landing page for this shop.</p>
  </>
);

export default function ShopPage({ shopName, shopId }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <div
        style={{
          flex: "1",
          borderRight: "1px solid black",
          height: "calc(100vh - 65px)",
        }}
      >
        <Header shopId={shopId} shopName={shopName} />
        <WidgetButton shopId={shopId} shopName={shopName} />
      </div>
      <MessageList shopId={shopId} />
    </div>
  );
}
