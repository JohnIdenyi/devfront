import Card from "./Card";

export default function HomeCards() {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card
            bg="bg-gray-100"
            header="For Developers"
            desc="Browse our React jobs and start your career today"
            link="/jobs"
            linkText="Browse Job"
          />
          <Card
            header="For Employers"
            desc="List your job to find the perfect developer for the role"
            link="/add-job"
            linkText="Add Job"
          />
        </div>
      </div>
    </section>
  );
}
