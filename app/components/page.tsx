import Breadcrumb from "@/ui/breadcrumb";
import Badge from "@/ui/badge";
import Alert from "@/ui/alert";

export default function Page() {
  const breadcrumbItems = [
    { href: "/", element: "Home" },
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
      <section className="space-y-4">
        <div className="">
          <Badge kind="pink" text="pink" />
          <Badge kind="purple" text="purple" />
          <Badge kind="indigo" text="indigo" />
          <Badge kind="yellow" text="yellow" />
          <Badge kind="green" text="green" />
          <Badge kind="red" text="red" />
          <Badge kind="dark" text="dark" />
          <Badge kind="default" text="default" />
        </div>
        <div className="my-1">
          <Alert kind="info" message="infor message" />
          <Alert kind="danger" message="infor message" />
          <Alert kind="success" message="infor message" />
          <Alert kind="warning" message="infor message" />
          <Alert kind="default" message="infor message" />
        </div>
      </section>
    </>
  );
}
