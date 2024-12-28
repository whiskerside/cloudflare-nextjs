import Breadcrumb from "@/ui/breadcrumb";
import Badge from "@/ui/badge";
import Alert from "@/ui/alert";

export default function Page() {
  const breadcrumbItems = [
    { href: "/", element: "Home" },
    { href: "/category/electronics", element: "Electronics" },
    {
      href: "/product/123",
      element: (
        <span>
          Product 123 with <strong>Emphasis</strong>
        </span>
      ),
    }, // JSX element with more complex content
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="max-w-screen-lg mx-auto p-3 px-0 mb-6">
        <div className="pb-3">
          <Badge kind="pink" text="pink" />
          <Badge kind="purple" text="purple" />
          <Badge kind="indigo" text="indigo" />
          <Badge kind="yellow" text="yellow" />
          <Badge kind="green" text="green" />
          <Badge kind="red" text="red" />
          <Badge kind="dark" text="dark" />
          <Badge kind="default" text="default" />
        </div>
        <div className="my-3">
          <Alert kind="info" message="infor message" />
          <Alert kind="danger" message="infor message" />
          <Alert kind="success" message="infor message" />
          <Alert kind="warning" message="infor message" />
          <Alert kind="default" message="infor message" />
        </div>
      </div>
      ;
    </>
  );
}
