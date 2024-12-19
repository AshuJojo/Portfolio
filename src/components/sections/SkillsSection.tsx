import { Button } from "../ui/button";

const SkillsSection = () => {
  return (
    <div className="container min-h-screen border-b-4 border-black">
      <h2 className="section-heading">Skills</h2>
      {/* Skills Container */}
      <div className="flex flex-col gap-4 min-h-[80vh]">
        {/* Skills Categories */}
        <div className="flex gap-2">
          <Button
            className="rounded-full text-black font-bold disabled:opacity-100"
            dropShadow="none"
            disabled
          >
            All
          </Button>
          <Button
            className="rounded-full text-black font-bold bg-white hover:bg-primary"
            dropShadow="sm"
          >
            Frontend
          </Button>
          <Button
            className="rounded-full text-black font-bold bg-white hover:bg-primary"
            dropShadow="sm"
          >
            Backend
          </Button>
        </div>
        {/* Skills */}
        <div className="bg-white flex-grow rounded-xl border-2 border-black drop-shadow-4xl"></div>
      </div>
    </div>
  );
};

export default SkillsSection;
