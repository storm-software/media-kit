/* -------------------------------------------------------------------

                    ⚡ Storm Software - Media Kit

 This code was released as part of the Media Kit project. Media Kit
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/media-kit.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/media-kit
 Documentation:            https://docs.stormsoftware.com/projects/media-kit
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { loadFont } from "@remotion/google-fonts/Orbitron";
import { Img } from "remotion";

const { fontFamily } = loadFont();

export interface TitleProps {
  size?: "lg" | "md" | "sm";
}

export const Title: React.FC<TitleProps> = ({ size = "md" }) => {
  return (
    <div
      className={`flex justify-center flex-row ${size === "lg" ? "gap-6" : "gap-3"} `}>
      <Img
        src="https://public.storm-cdn.com/storm-software/logo.svg"
        className={size === "lg" ? "w-96" : size === "md" ? "w-72" : "w-40"}
      />
      <h1
        style={{ fontFamily }}
        className={`text-white font-black font-orbitron ${
          size === "lg"
            ? "text-[20rem] mt-10"
            : size === "md"
              ? "text-[16rem]"
              : "text-[10rem]"
        }`}>
        Storm
      </h1>
    </div>
  );
};
