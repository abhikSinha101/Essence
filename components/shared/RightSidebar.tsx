function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start p-4 pr-20">
        <p className="text-dark-3 text-small-medium max-lg:hidden p-1">
          Recent Documents
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-start p-4 pr-20">
        <p className="text-dark-3 text-small-medium max-lg:hidden p-1">
          Team Mates
        </p>
      </div>
    </section>
  );
}

export default RightSidebar;
