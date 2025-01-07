const AuthLayout = ({ children, ClassName }) => {
  const image = {
    backgroundImage: 'url("/images/bgauth2.jpg")',
    backgroundSize: "cover", // Menyesuaikan gambar untuk mengisi ruang latar belakang
    backgroundPosition: "center", // Menengahkan gambar di latar belakang
    height: "100vh", // Menggunakan tinggi layar penuh
  };
  const logo = {
    backgroundImage: 'url("/images/pixture.jpg")',
    backgroundSize: "cover", // Menyesuaikan gambar untuk mengisi ruang latar belakang
    backgroundPosition: "center", // Menengahkan gambar di latar belakang
    height: "100vh", // Menggunakan tinggi layar penuh
  };
  return (
    <>
      <div
        style={image}
        className="flex w-full h-screen justify-center items-start filter brightness-75 relative pt-3 md:pt-0"
      >
        <img src="/images/pixture.png" alt="" className="w-50 h-28 md:hidden" />
      </div>
      <div
        className={`rounded-t-3xl md:w-[35%] w-full md:max-h-full absolute top-[400px] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-filter backdrop-brightness-50 md:rounded-lg ${ClassName}`}
      >
        {children}
      </div>
    </>
  );
};
export default AuthLayout;
