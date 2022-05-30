import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { SeekBar } from "components/SeekBar";
import { Button } from "components/Button";

const PageBerhasil = () => {
  const navigate = useNavigate();

  const handleNavigate4 = () => navigate("/homelogin");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-center mx-[auto] w-[100%]">
        <Stack className="lg:h-[444px] h-[507px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] lg:mt-[207px] mt-[237px] 2xl:mt-[267px] 3xl:mt-[320px] mx-[auto] w-[88%]">
          <Stack className="absolute lg:h-[444px] h-[507px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] inset-[0] w-[100%]">
            <Row className="absolute inset-y-[0] items-start justify-between left-[2%] right-[0] w-[98%]">
              <Text className="font-bold lg:mb-[285px] mb-[326px] 2xl:mb-[367px] 3xl:mb-[440px] mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[92px] text-black_900 lg:text-fs43 text-fs50 2xl:text-fs56 3xl:text-fs67 text-left">{`Payment Successful`}</Text>
              <Image
                src="img_walletrafiki1.png"
                className="lg:h-[444px] h-[507px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] object-contain lg:w-[443px] w-[507px] 2xl:w-[571px] 3xl:w-[685px]"
                alt="Walletrafiki1"
              />
            </Row>
            <Text className="absolute font-normal leading-lh left-[2%] not-italic text-black_900 lg:text-fs21 text-fs24 2xl:text-fs27 3xl:text-fs32 text-left top-[37%] w-[56%]">
              {
                <>
                  {`Terima kasih.`}
                  <br />
                  {`Silahkan cek email anda untuk mendapatkan QR Code.`}
                </>
              }
            </Text>
            <Row className="absolute bottom-[30%] items-start justify-between left-[0] w-[29%]">
              <Text className="font-bold lg:mb-[13px] mb-[15px] 2xl:mb-[16px] 3xl:mb-[20px] text-black_900 text-center lg:text-fs13 text-fs15 2xl:text-fs16 3xl:text-fs20">{`Memilih event`}</Text>
              <Text className="font-bold leading-lh text-black_900 text-center lg:text-fs13 text-fs15 2xl:text-fs16 3xl:text-fs20 w-[43%]">{`Memilih metode pembayaran`}</Text>
            </Row>
          </Stack>
          <Column className="absolute bottom-[30%] items-start justify-start left-[4%] w-[44%]">
            <Column className="bg-teal_100 mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] w-[93%]">
              <SeekBar
                inputValue={[1, 5]}
                trackColors={["#accee1", "", "#accee1"]}
                thumbClassName="w-[30px] h-[30px] bg-teal_100 flex lg:w-[26px] lg:h-[27px] xl:h-[31px] 2xl:w-[33px] 2xl:h-[34px] 3xl:w-[40px] 3xl:h-[41px] justify-center items-center rounded-radius501 outline-none"
                className="flex lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[34px] 3xl:h-[41px] rounded-radius50 w-[100%]"
                trackClassName="h-[8px] flex xl:h-[9px] 2xl:h-[10px] 3xl:h-[11px] rounded-radius50 w-[100%]"
              />{" "}
            </Column>
            <Column className="items-end mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
              <Text className="font-bold leading-lh ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] text-black_900 text-center lg:text-fs13 text-fs15 2xl:text-fs16 3xl:text-fs20 w-[23%]">{`Pembayaran berhasil`}</Text>
            </Column>
          </Column>
        </Stack>
        <Button
          className="common-pointer bg-indigo_A700 font-normal lg:mb-[17px] mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[29px] mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] mx-[auto] lg:pb-[12px] pb-[14.06px] xl:pb-[14px] 2xl:pb-[15px] 3xl:pb-[19px] lg:pt-[13px] pt-[15.06px] xl:pt-[15px] 2xl:pt-[16px] 3xl:pt-[20px] rounded-radius25 text-center lg:text-fs21 text-fs24 2xl:text-fs27 3xl:text-fs32 text-white_A700 w-[19%]"
          onClick={handleNavigate4}
        >{`Back Home`}</Button>
      </Column>
    </>
  );
};

export default PageBerhasil;
