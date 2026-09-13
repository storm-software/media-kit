/* -------------------------------------------------------------------

                    🗲 Storm Software - Media Kit

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

export function OrgTitleText({
  theme,
  className
}: {
  theme: "dark" | "light";
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1621.8"
      height="292.8"
      viewBox="123 203 1802 244"
      role="img"
      className={className}>
      <g fill={theme === "light" ? "[#1d1e22]" : "white"}>
        <path
          d="
      M 440 203
      H 171
      C 144 203, 123 224, 123 251
      V 299
      C 123 329, 146 352, 175 352
      H 371
      C 380 352, 387 359, 387 368
      V 376
      C 387 384, 381 390, 373 390
      H 123
      V 446
      H 396
      C 425 446, 448 423, 448 394
      V 352
      C 448 323, 426 299, 395 299
      H 198
      C 190 299, 183 292, 183 284
      V 275
      C 183 266, 189 259, 198 259
      H 440
      Z"
        />

        <path
          d="
      M 469 203 H 785 V 260 H 469 Z
      M 584 284 H 656 V 446 H 584 Z"
        />

        <path
          fill-rule="evenodd"
          d="
      M 875 203
      H 1088
      C 1124 203, 1153 232, 1153 268
      V 382
      C 1153 418, 1124 447, 1088 447
      H 875
      C 839 447, 810 418, 810 382
      V 268
      C 810 232, 839 203, 875 203
      Z

      M 897 262
      H 1067
      C 1081 262, 1092 273, 1092 287
      V 367
      C 1092 381, 1081 392, 1067 392
      H 897
      C 883 392, 872 381, 872 367
      V 287
      C 872 273, 883 262, 897 262
      Z"
        />

        <path
          d="
      M 1186 203
      H 1444
      C 1482 203, 1512 233, 1512 271
      V 289
      C 1512 327, 1482 357, 1444 357
      H 1417
      L 1513 446
      H 1424
      L 1328 357
      H 1253
      V 446
      H 1186
      V 305
      H 1433
      C 1442 305, 1449 298, 1449 289
      V 279
      C 1449 270, 1442 263, 1433 263
      H 1186
      Z"
        />

        <path
          d="
      M 1545 203
      H 1608
      L 1732 326
      L 1858 203
      H 1925
      V 446
      H 1858
      V 298
      L 1732 416
      L 1609 299
      V 446
      H 1545
      Z"
        />
      </g>
    </svg>
  );
}
