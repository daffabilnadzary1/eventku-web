import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Input } from "components/Input";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { List } from "components/List";

const HomeLogInPage = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/enroll");

  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] w-[100%]">
        <Column className="items-start justify-start lg:mb-[17px] mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[18px] mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]">
          <Column className="w-[100%]">
            <Stack className="lg:h-[50px] h-[57px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[100%]">
              <Text className="absolute font-normal not-italic right-[6%] text-center lg:text-fs12 text-fs14 2xl:text-fs15 3xl:text-fs18 text-white_A700 top-[16%]">{`Log in`}</Text>
              <Row className="absolute items-center justify-between right-[2%] top-[0] w-[28%]">
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border border-gray_500 border-solid font-normal not-italic 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[8px] pb-[9.29px] xl:pb-[9px] lg:pl-[17px] pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] pt-[10.29px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[9px] rounded-radius20 lg:text-fs13 text-fs15 2xl:text-fs16 3xl:text-fs20 placeholder:text-gray_500 text-gray_500 text-left w-[79%]"
                  name="Search"
                  placeholder={`Search`}
                ></Input>
                <Image
                  src="img_user1.png"
                  className="lg:h-[31px] h-[35px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] object-contain lg:w-[30px] w-[35px] 2xl:w-[39px] 3xl:w-[47px]"
                  alt="user1"
                />
              </Row>
              <Column className="absolute bottom-[0] items-start justify-start w-[100%]">
                <Column className="w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <Text className="font-normal lg:ml-[113px] ml-[130px] 2xl:ml-[146px] 3xl:ml-[175px] not-italic text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left">{`Home`}</Text>
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
            <Row className="lg:gap-[30px] gap-[35px] 2xl:gap-[39px] 3xl:gap-[47px] grid grid-cols-3 items-center justify-between lg:mt-[42px] mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] overflow-auto w-[100%]">
              <Image
                src="img_90e471a6dc514.png"
                className="lg:h-[303px] h-[345px] xl:h-[346px] 2xl:h-[389px] 3xl:h-[467px] object-contain rounded-radius20 w-[100%]"
                alt="90e471a6dc514"
              />
              <Image
                src="img_digitalposter.png"
                className="lg:h-[303px] h-[345px] xl:h-[346px] 2xl:h-[389px] 3xl:h-[467px] object-contain rounded-radius20 w-[100%]"
                alt="DigitalPoster"
              />
              <Image
                src="img_f008af59055d4.png"
                className="lg:h-[303px] h-[345px] xl:h-[346px] 2xl:h-[389px] 3xl:h-[467px] object-contain rounded-radius20 w-[100%]"
                alt="f008af59055d4"
              />
            </Row>
          </Column>
          <Row className="bg-gray_100 items-center justify-start 3xl:mt-[101px] lg:mt-[65px] mt-[75px] 2xl:mt-[84px] lg:mx-[40px] mx-[46px] 2xl:mx-[51px] 3xl:mx-[62px] rounded-radius10 w-[25%]">
            <Text className="font-normal lg:mb-[12px] mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[13px] ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[13px] mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic text-black_900 lg:text-fs17 text-fs20 2xl:text-fs22 3xl:text-fs27 text-left">{`Filter based on region`}</Text>
            <Image
              src="img_union.svg"
              className="lg:h-[19px] h-[21.14px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] lg:mb-[15px] mb-[17.93px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:ml-[49px] ml-[56.36px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[76px] lg:mt-[12px] mt-[13.93px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] object-contain lg:w-[18px] w-[21.14px] xl:w-[21px] 2xl:w-[23px] 3xl:w-[28px]"
              alt="Union"
            />
          </Row>
          <Column className="items-end lg:mt-[39px] mt-[45px] 2xl:mt-[50px] 3xl:mt-[60px] overflow-auto w-[100%]">
            <List
              className="lg:gap-[43px] gap-[50px] 2xl:gap-[56px] 3xl:gap-[67px] grid grid-cols-4 min-h-[auto] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] w-[100%]">
                <Stack className="absolute lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] w-[100%]">
                  <Stack className="absolute bg-gray_100 lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] rounded-radius20 w-[100%]">
                    <Image
                      src="img_rectangle17.svg"
                      className="common-pointer absolute bottom-[8%] lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] object-contain right-[3%] rounded-radius20 w-[35%]"
                      onClick={handleNavigate1}
                      alt="Rectangle17"
                    />
                    <Text className="absolute bottom-[9%] font-medium right-[9%] text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-white_A700">{`Get Ticket`}</Text>
                  </Stack>
                  <Image
                    src="img_197afe777c614.png"
                    className="absolute lg:h-[214px] h-[244px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] object-cover rounded-radius20 top-[0] w-[100%]"
                    alt="197afe777c614"
                  />
                </Stack>
                <Text className="absolute bottom-[6%] font-medium leading-lh left-[4%] text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left w-[52%]">{`ROSSA 25 SHINING YEARS CONCERT`}</Text>
              </Stack>
              <Stack className="lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] w-[100%]">
                <Stack className="absolute lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] w-[100%]">
                  <Stack className="absolute bg-gray_100 lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] rounded-radius20 w-[100%]">
                    <Image
                      src="img_rectangle17_1.svg"
                      className="absolute bottom-[8%] lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] object-contain right-[3%] rounded-radius20 w-[35%]"
                      alt="Rectangle17"
                    />
                    <Text className="absolute bottom-[9%] font-medium right-[9%] text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-white_A700">{`Get Ticket`}</Text>
                  </Stack>
                  <Image
                    src="img_46b0703c8b184.png"
                    className="absolute lg:h-[214px] h-[244px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] object-cover rounded-radius20 top-[0] w-[100%]"
                    alt="46b0703c8b184"
                  />
                </Stack>
                <Text className="absolute bottom-[6%] font-medium leading-lh left-[4%] text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left w-[52%]">{`MOTOGP SEPANG MALAYSIA 2022`}</Text>
              </Stack>
              <Stack className="lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] w-[100%]">
                <Stack className="absolute lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] w-[100%]">
                  <Stack className="absolute bg-gray_100 lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] rounded-radius20 w-[100%]">
                    <Image
                      src="img_rectangle17_2.svg"
                      className="absolute bottom-[8%] lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] object-contain right-[3%] rounded-radius20 w-[35%]"
                      alt="Rectangle17"
                    />
                    <Text className="absolute bottom-[9%] font-medium right-[9%] text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-white_A700">{`Get Ticket`}</Text>
                  </Stack>
                  <Image
                    src="img_96750855d125468.png"
                    className="absolute lg:h-[214px] h-[244px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] object-cover rounded-radius20 top-[0] w-[100%]"
                    alt="96750855d125468"
                  />
                </Stack>
                <Text className="absolute bottom-[6%] font-medium leading-lh left-[4%] text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left w-[52%]">{`SWARAYA ~ Swara Kebun Raya`}</Text>
              </Stack>
              <Stack className="lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] w-[100%]">
                <Stack className="absolute lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] w-[100%]">
                  <div className="absolute bg-gray_100 lg:h-[271px] h-[309px] xl:h-[310px] 2xl:h-[349px] 3xl:h-[418px] inset-[0] rounded-radius20 w-[100%]"></div>
                  <Image
                    src="img_9731e015ecee4.png"
                    className="absolute lg:h-[214px] h-[244px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] object-cover rounded-radius20 top-[0] w-[100%]"
                    alt="9731e015ecee4"
                  />
                </Stack>
                <Row className="absolute bottom-[6%] inset-x-[0] items-start justify-between mx-[auto] w-[92%]">
                  <Text className="font-medium leading-lh text-black_900 lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-left w-[56%]">{`Formula 1 Singapore Airlines Singapore..`}</Text>
                  <Stack className="lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] lg:mb-[6px] mb-[7px] 3xl:mb-[9px] w-[38%]">
                    <Image
                      src="img_rectangle17_3.svg"
                      className="absolute lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] inset-[0] object-cover rounded-radius20 w-[100%]"
                      alt="Rectangle17"
                    />
                    <Text className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-center lg:text-fs14 text-fs16 2xl:text-fs18 3xl:text-fs21 text-white_A700 w-[max-content]">{`Get Ticket`}</Text>
                  </Stack>
                </Row>
              </Stack>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HomeLogInPage;
