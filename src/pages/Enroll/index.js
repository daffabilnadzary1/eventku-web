import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Input } from "components/Input";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";

const EnrollPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNavigate2 = () => navigate("/homelogin");
  const handleNavigate3 = () => navigate("/pageberhasil");

  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] w-[100%]">
        <Column className="items-center justify-end lg:mt-[18px] mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]">
          <Stack className="lg:h-[50px] h-[57px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]">
            <Row className="absolute items-center justify-between right-[2%] top-[0] w-[28%]">
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-gray_500 border-solid font-normal not-italic 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[8px] pb-[9.29px] xl:pb-[9px] lg:pl-[17px] pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pt-[10.29px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[9px] rounded-radius20 lg:text-fs13 text-fs15 2xl:text-fs16 3xl:text-fs20 placeholder:text-gray_500 text-gray_500 text-left w-[79%]"
                name="Search"
                placeholder={`Search`}
              ></Input>
              <Image
                src="img_user1_1.png"
                className="lg:h-[31px] h-[35px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] object-contain lg:w-[30px] w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                alt="user1"
              />
            </Row>
            <Column className="absolute bottom-[0] items-start justify-start w-[100%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-start w-[100%]">
                  <Text
                    className="common-pointer font-normal lg:ml-[113px] ml-[130px] 2xl:ml-[146px] 3xl:ml-[175px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left"
                    onClick={handleNavigate2}
                  >{`Home`}</Text>
                  <Text className="font-normal lg:ml-[35px] ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left">{`Feature`}</Text>
                  <Text className="font-normal lg:ml-[35px] ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left">{`FAQ`}</Text>
                  <Text className="font-normal lg:ml-[35px] ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left">{`About Us`}</Text>
                </Row>
              </Column>
              <Line className="bg-gray_700 h-[3px] 3xl:mt-[10px] lg:mt-[7px] mt-[8px] 2xl:mt-[9px] lg:mx-[112px] mx-[128px] 2xl:mx-[144px] 3xl:mx-[173px] w-[4%]" />
              <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] mt-[9px] w-[100%]">
                <Line className="bg-gray_500 h-[1px] w-[100%]" />
              </Column>
            </Column>
          </Stack>
          <Row className="bg-gray_100 items-center justify-start lg:mt-[28px] mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] mx-[auto] rounded-radius20 w-[93%]">
            <Image
              src="img_197afe777c614_1.png"
              className="lg:h-[381px] h-[435px] xl:h-[436px] 2xl:h-[491px] 3xl:h-[589px] object-contain rounded-radius20 w-[72%]"
              alt="197afe777c614"
            />
            <Column className="items-start w-[28%]">
              <Text className="font-bold leading-lh lg:mt-[39px] mt-[45px] 2xl:mt-[50px] 3xl:mt-[60px] lg:mx-[26px] mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] text-black_900 lg:text-fs21 text-fs24 2xl:text-fs27 3xl:text-fs32 text-left w-[74%]">{`ROSSA 25 SHINING YEARS CONCERT`}</Text>
              <Column className="items-center lg:mt-[47px] mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
                <Row className="items-center justify-start mx-[auto] w-[82%]">
                  <Image
                    src="img_placeholder1.png"
                    className="lg:h-[22px] h-[24px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:my-[6px] my-[7px] 3xl:my-[9px] object-contain w-[8%]"
                    alt="placeholder1"
                  />
                  <Text className="font-normal leading-lh ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left w-[88%]">{`Dyandra Convention Center Surabaya`}</Text>
                </Row>
              </Column>
              <Row className="items-center justify-start lg:mt-[17px] mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:mx-[26px] mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] w-[62%]">
                <Image
                  src="img_calendar1.png"
                  className="lg:h-[22px] h-[24px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:my-[6px] my-[7px] 3xl:my-[9px] object-contain w-[11%]"
                  alt="calendar1"
                />
                <Text className="font-normal leading-lh mb-[1px] ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left w-[84%]">
                  {
                    <>
                      {`Sabtu, 25 Juni 2022`}
                      <br />
                      {`Pukul 17.00`}
                    </>
                  }
                </Text>
              </Row>
              <Column className="items-center lg:mb-[59px] mb-[68px] 2xl:mb-[76px] 3xl:mb-[91px] 3xl:mt-[114px] lg:mt-[74px] mt-[85px] 2xl:mt-[95px] w-[100%]">
                <input type={"text"} style={{"margin-bottom": "10px"}} onChange={setEmail}></input>
                <Stack className="lg:h-[26px] h-[29px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] mx-[auto] w-[37%]">
                  <Stack className="absolute lg:h-[26px] h-[29px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] inset-[0] w-[100%]">
                    <Stack className="absolute lg:h-[26px] h-[29px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] inset-[0] w-[100%]">
                      <Image
                        src="img_rectangle17_4.svg"
                        className="common-pointer absolute lg:h-[26px] h-[29px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] inset-[0] object-cover rounded-radius20 w-[100%]"
                        
                        alt="Rectangle17"
                      />
                      <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[0] lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left text-white_A700">{`Get Ticket`}</Text>
                    </Stack>
                    <Image
                      src="img_rectangle17_5.svg"
                      className="absolute lg:h-[26px] h-[29px] xl:h-[30px] 2xl:h-[33px] 3xl:h-[40px] inset-[0] object-cover rounded-radius20 w-[100%]"
                      
                      alt="Rectangle17"
                    />
                  </Stack>
                  <Text
                    className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left text-white_A700 w-[max-content]"
                    onClick={handleNavigate3}
                  >{`Get Ticket`}</Text>
                </Stack>
                
              </Column>
            </Column>
          </Row>
          <Row className="items-start justify-between lg:mt-[21px] mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
            <Column className="items-start justify-start lg:ml-[43px] ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] w-[47%]">
              <Text className="font-normal leading-lh mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] not-italic lg:text-fs12 text-fs14 2xl:text-fs15 3xl:text-fs18 text-gray_900 text-left w-[97%]">
                {
                  <>
                    {`Inspire Production akan mengadakan konser offline di 4 kota besar di Indonesia bertajuk “25 Shining Years Rossa”. Salah satunya di Kota Surabaya. Konser ini untuk merayakan 25 tahun perjalanan karier Rossa di Industri Musik Indonesia.`}
                    <br />
                    {`Setelah menahan rindu selama dua tahun akibat pandemi, pada tahun 2022 ini Rossa akan menyapamu secara langsung di Kota Surabaya. Yuk pesan sekarang juga tiket konser Rossa di tiket.com!`}
                  </>
                }
              </Text>
              <Text className="font-bold mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] lg:mt-[29px] mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] text-black_900 lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-left">{`Syarat & Ketentuan`}</Text>
              <Text className="font-normal leading-lh mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic text-black_900 lg:text-fs12 text-fs14 2xl:text-fs15 3xl:text-fs18 text-left w-[100%]">
                {
                  <>
                    {`Umum`}
                    <br />
                    {`Harga sudah termasuk pajak.`}
                    <br />
                    {`Tiket yang sudah dibeli tidak dapat dikembalikan dan non-refundable.`}
                    <br />
                    {`Tiket yang sudah dibeli tidak dapat diganti jadwalnya`}
                    <br />
                    {`Pembeli wajib mengisi data diri pribadi saat memesan.`}
                    <br />
                    {`Penjualan tiket sewaktu-waktu dapat dihentikan atau dimulai oleh tiket.com sesuai dengan kebijakan dari promotor atau tiket.com.`}
                    <br />
                    {`Pengunjung wajib sudah vaksin dan memiliki aplikasi Peduli Lindungi.`}
                    <br />
                    {`Pengunjung wajib menggunakan masker selama acara berlangsung.`}
                    <br />
                    {`Pengunjung wajib menjaga protokol kesehatan yang berlaku.`}
                    <br />
                    {`Disarankan tidak membawa anak – anak di bawah umur 12 tahun.`}
                    <br />
                    {``}
                    <br />
                    {` 2. E-tiket`}
                    <br />
                    {`E-tiket tidak dapat diuangkan.`}
                  </>
                }
              </Text>
            </Column>
            <Column className="items-start justify-start lg:mb-[126px] mb-[145px] 2xl:mb-[163px] 3xl:mb-[196px] lg:mr-[55px] mr-[63px] 2xl:mr-[70px] 3xl:mr-[85px] lg:mt-[18px] mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[32%]">
              <Text className="font-bold mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] text-black_900 lg:text-fs21 text-fs24 2xl:text-fs27 3xl:text-fs32 text-left">{`Show Venue`}</Text>
              <Column className="lg:mt-[17px] mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                <Stack className="lg:h-[236px] h-[269px] xl:h-[270px] 2xl:h-[304px] 3xl:h-[364px] rounded-radius20 w-[100%]">
                  <Image
                    src="img_screenshot202.png"
                    className="absolute lg:h-[236px] h-[269px] xl:h-[270px] 2xl:h-[304px] 3xl:h-[364px] inset-[0] object-cover w-[100%]"
                    alt="ScreenShot202"
                  />
                </Stack>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default EnrollPage;