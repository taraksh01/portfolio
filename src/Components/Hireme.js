const Hireme = () => {
  return (
    <div className="bg-white text-black max-w-screen-md h-[600px] sm:h-[1080px] mx-auto">
      <embed
        type="application/pdf"
        className="w-full h-full"
        style={{ border: "none" }}
        alt="resume"
        title="resume"
        src="https://drive.google.com/file/d/10Yj1E6ZBgjWN-qVy3DjoQry9z0vIpvAx/preview"
        allow="autoplay"
      />
    </div>
  );
};

export default Hireme;
