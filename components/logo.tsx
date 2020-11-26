import { NextComponentType } from 'next';
import Image from 'next/image';

interface Props {
  width?: number;
}

const Logo = ({width}:Props) => {


  return (
    <svg className={"h-auto sm:h-auto my-0 mx-auto p-1 " + `sm:w-${width} w-${width}`}  viewBox="0 0 838 420" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.875 59.9375C59.875 70.2292 57.5208 78.5208 52.8125 84.8125C48.1042 91.1042 41.7292 94.25 33.6875 94.25C25.4792 94.25 19.0208 91.6458 14.3125 86.4375V119H2.75V25.375H13.3125L13.875 32.875C18.5833 27.0417 25.125 24.125 33.5 24.125C41.625 24.125 48.0417 27.1875 52.75 33.3125C57.5 39.4375 59.875 47.9583 59.875 58.875V59.9375ZM48.3125 58.625C48.3125 51 46.6875 44.9792 43.4375 40.5625C40.1875 36.1458 35.7292 33.9375 30.0625 33.9375C23.0625 33.9375 17.8125 37.0417 14.3125 43.25V75.5625C17.7708 81.7292 23.0625 84.8125 30.1875 84.8125C35.7292 84.8125 40.125 82.625 43.375 78.25C46.6667 73.8333 48.3125 67.2917 48.3125 58.625ZM107.312 35.75C105.562 35.4583 103.667 35.3125 101.625 35.3125C94.0417 35.3125 88.8958 38.5417 86.1875 45V93H74.625V25.375H85.875L86.0625 33.1875C89.8542 27.1458 95.2292 24.125 102.188 24.125C104.438 24.125 106.146 24.4167 107.312 25V35.75ZM113.688 58.5625C113.688 51.9375 114.979 45.9792 117.562 40.6875C120.188 35.3958 123.812 31.3125 128.438 28.4375C133.104 25.5625 138.417 24.125 144.375 24.125C153.583 24.125 161.021 27.3125 166.688 33.6875C172.396 40.0625 175.25 48.5417 175.25 59.125V59.9375C175.25 66.5208 173.979 72.4375 171.438 77.6875C168.938 82.8958 165.333 86.9583 160.625 89.875C155.958 92.7917 150.583 94.25 144.5 94.25C135.333 94.25 127.896 91.0625 122.188 84.6875C116.521 78.3125 113.688 69.875 113.688 59.375V58.5625ZM125.312 59.9375C125.312 67.4375 127.042 73.4583 130.5 78C134 82.5417 138.667 84.8125 144.5 84.8125C150.375 84.8125 155.042 82.5208 158.5 77.9375C161.958 73.3125 163.688 66.8542 163.688 58.5625C163.688 51.1458 161.917 45.1458 158.375 40.5625C154.875 35.9375 150.208 33.625 144.375 33.625C138.667 33.625 134.062 35.8958 130.562 40.4375C127.062 44.9792 125.312 51.4792 125.312 59.9375ZM201.688 25.375V100.812C201.688 113.812 195.792 120.312 184 120.312C181.458 120.312 179.104 119.938 176.938 119.188V109.938C178.271 110.271 180.021 110.438 182.188 110.438C184.771 110.438 186.729 109.729 188.062 108.312C189.438 106.938 190.125 104.521 190.125 101.062V25.375H201.688ZM188.938 7.4375C188.938 5.60417 189.5 4.04167 190.625 2.75C191.792 1.41667 193.479 0.75 195.688 0.75C197.938 0.75 199.646 1.39583 200.812 2.6875C201.979 3.97917 202.562 5.5625 202.562 7.4375C202.562 9.3125 201.979 10.875 200.812 12.125C199.646 13.375 197.938 14 195.688 14C193.438 14 191.75 13.375 190.625 12.125C189.5 10.875 188.938 9.3125 188.938 7.4375ZM248.438 94.25C239.271 94.25 231.812 91.25 226.062 85.25C220.312 79.2083 217.438 71.1458 217.438 61.0625V58.9375C217.438 52.2292 218.708 46.25 221.25 41C223.833 35.7083 227.417 31.5833 232 28.625C236.625 25.625 241.625 24.125 247 24.125C255.792 24.125 262.625 27.0208 267.5 32.8125C272.375 38.6042 274.812 46.8958 274.812 57.6875V62.5H229C229.167 69.1667 231.104 74.5625 234.812 78.6875C238.562 82.7708 243.312 84.8125 249.062 84.8125C253.146 84.8125 256.604 83.9792 259.438 82.3125C262.271 80.6458 264.75 78.4375 266.875 75.6875L273.938 81.1875C268.271 89.8958 259.771 94.25 248.438 94.25ZM247 33.625C242.333 33.625 238.417 35.3333 235.25 38.75C232.083 42.125 230.125 46.875 229.375 53H263.25V52.125C262.917 46.25 261.333 41.7083 258.5 38.5C255.667 35.25 251.833 33.625 247 33.625ZM315.375 84.8125C319.5 84.8125 323.104 83.5625 326.188 81.0625C329.271 78.5625 330.979 75.4375 331.312 71.6875H342.25C342.042 75.5625 340.708 79.25 338.25 82.75C335.792 86.25 332.5 89.0417 328.375 91.125C324.292 93.2083 319.958 94.25 315.375 94.25C306.167 94.25 298.833 91.1875 293.375 85.0625C287.958 78.8958 285.25 70.4792 285.25 59.8125V57.875C285.25 51.2917 286.458 45.4375 288.875 40.3125C291.292 35.1875 294.75 31.2083 299.25 28.375C303.792 25.5417 309.146 24.125 315.312 24.125C322.896 24.125 329.188 26.3958 334.188 30.9375C339.229 35.4792 341.917 41.375 342.25 48.625H331.312C330.979 44.25 329.312 40.6667 326.312 37.875C323.354 35.0417 319.688 33.625 315.312 33.625C309.438 33.625 304.875 35.75 301.625 40C298.417 44.2083 296.812 50.3125 296.812 58.3125V60.5C296.812 68.2917 298.417 74.2917 301.625 78.5C304.833 82.7083 309.417 84.8125 315.375 84.8125ZM370.938 9V25.375H383.562V34.3125H370.938V76.25C370.938 78.9583 371.5 81 372.625 82.375C373.75 83.7083 375.667 84.375 378.375 84.375C379.708 84.375 381.542 84.125 383.875 83.625V93C380.833 93.8333 377.875 94.25 375 94.25C369.833 94.25 365.938 92.6875 363.312 89.5625C360.688 86.4375 359.375 82 359.375 76.25V34.3125H347.062V25.375H359.375V9H370.938ZM396.75 111.125L390.188 106.625C394.104 101.167 396.146 95.5417 396.312 89.75V79.3125H407.625V88.375C407.625 92.5833 406.583 96.7917 404.5 101C402.458 105.208 399.875 108.583 396.75 111.125ZM13.625 175.375L13.9375 182.875C18.8958 177.042 25.5833 174.125 34 174.125C43.4583 174.125 49.8958 177.75 53.3125 185C55.5625 181.75 58.4792 179.125 62.0625 177.125C65.6875 175.125 69.9583 174.125 74.875 174.125C89.7083 174.125 97.25 181.979 97.5 197.688V243H85.9375V198.375C85.9375 193.542 84.8333 189.938 82.625 187.562C80.4167 185.146 76.7083 183.938 71.5 183.938C67.2083 183.938 63.6458 185.229 60.8125 187.812C57.9792 190.354 56.3333 193.792 55.875 198.125V243H44.25V198.688C44.25 188.854 39.4375 183.938 29.8125 183.938C22.2292 183.938 17.0417 187.167 14.25 193.625V243H2.6875V175.375H13.625ZM156.75 243C156.083 241.667 155.542 239.292 155.125 235.875C149.75 241.458 143.333 244.25 135.875 244.25C129.208 244.25 123.729 242.375 119.438 238.625C115.188 234.833 113.062 230.042 113.062 224.25C113.062 217.208 115.729 211.75 121.062 207.875C126.438 203.958 133.979 202 143.688 202H154.938V196.688C154.938 192.646 153.729 189.438 151.312 187.062C148.896 184.646 145.333 183.438 140.625 183.438C136.5 183.438 133.042 184.479 130.25 186.562C127.458 188.646 126.062 191.167 126.062 194.125H114.438C114.438 190.75 115.625 187.5 118 184.375C120.417 181.208 123.667 178.708 127.75 176.875C131.875 175.042 136.396 174.125 141.312 174.125C149.104 174.125 155.208 176.083 159.625 180C164.042 183.875 166.333 189.229 166.5 196.062V227.188C166.5 233.396 167.292 238.333 168.875 242V243H156.75ZM137.562 234.188C141.188 234.188 144.625 233.25 147.875 231.375C151.125 229.5 153.479 227.062 154.938 224.062V210.188H145.875C131.708 210.188 124.625 214.333 124.625 222.625C124.625 226.25 125.833 229.083 128.25 231.125C130.667 233.167 133.771 234.188 137.562 234.188ZM195.562 175.375L195.938 183.875C201.104 177.375 207.854 174.125 216.188 174.125C230.479 174.125 237.688 182.188 237.812 198.312V243H226.25V198.25C226.208 193.375 225.083 189.771 222.875 187.438C220.708 185.104 217.312 183.938 212.688 183.938C208.938 183.938 205.646 184.938 202.812 186.938C199.979 188.938 197.771 191.562 196.188 194.812V243H184.625V175.375H195.562ZM297 243C296.333 241.667 295.792 239.292 295.375 235.875C290 241.458 283.583 244.25 276.125 244.25C269.458 244.25 263.979 242.375 259.688 238.625C255.438 234.833 253.312 230.042 253.312 224.25C253.312 217.208 255.979 211.75 261.312 207.875C266.688 203.958 274.229 202 283.938 202H295.188V196.688C295.188 192.646 293.979 189.438 291.562 187.062C289.146 184.646 285.583 183.438 280.875 183.438C276.75 183.438 273.292 184.479 270.5 186.562C267.708 188.646 266.312 191.167 266.312 194.125H254.688C254.688 190.75 255.875 187.5 258.25 184.375C260.667 181.208 263.917 178.708 268 176.875C272.125 175.042 276.646 174.125 281.562 174.125C289.354 174.125 295.458 176.083 299.875 180C304.292 183.875 306.583 189.229 306.75 196.062V227.188C306.75 233.396 307.542 238.333 309.125 242V243H297ZM277.812 234.188C281.438 234.188 284.875 233.25 288.125 231.375C291.375 229.5 293.729 227.062 295.188 224.062V210.188H286.125C271.958 210.188 264.875 214.333 264.875 222.625C264.875 226.25 266.083 229.083 268.5 231.125C270.917 233.167 274.021 234.188 277.812 234.188ZM322.125 208.625C322.125 198.083 324.562 189.708 329.438 183.5C334.312 177.25 340.771 174.125 348.812 174.125C357.062 174.125 363.5 177.042 368.125 182.875L368.688 175.375H379.25V241.375C379.25 250.125 376.646 257.021 371.438 262.062C366.271 267.104 359.312 269.625 350.562 269.625C345.688 269.625 340.917 268.583 336.25 266.5C331.583 264.417 328.021 261.562 325.562 257.938L331.562 251C336.521 257.125 342.583 260.188 349.75 260.188C355.375 260.188 359.75 258.604 362.875 255.438C366.042 252.271 367.625 247.812 367.625 242.062V236.25C363 241.583 356.688 244.25 348.688 244.25C340.771 244.25 334.354 241.062 329.438 234.688C324.562 228.312 322.125 219.625 322.125 208.625ZM333.75 209.938C333.75 217.562 335.312 223.562 338.438 227.938C341.562 232.271 345.938 234.438 351.562 234.438C358.854 234.438 364.208 231.125 367.625 224.5V193.625C364.083 187.167 358.771 183.938 351.688 183.938C346.062 183.938 341.667 186.125 338.5 190.5C335.333 194.875 333.75 201.354 333.75 209.938ZM424.812 244.25C415.646 244.25 408.188 241.25 402.438 235.25C396.688 229.208 393.812 221.146 393.812 211.062V208.938C393.812 202.229 395.083 196.25 397.625 191C400.208 185.708 403.792 181.583 408.375 178.625C413 175.625 418 174.125 423.375 174.125C432.167 174.125 439 177.021 443.875 182.812C448.75 188.604 451.188 196.896 451.188 207.688V212.5H405.375C405.542 219.167 407.479 224.562 411.188 228.688C414.938 232.771 419.688 234.812 425.438 234.812C429.521 234.812 432.979 233.979 435.812 232.312C438.646 230.646 441.125 228.438 443.25 225.688L450.312 231.188C444.646 239.896 436.146 244.25 424.812 244.25ZM423.375 183.625C418.708 183.625 414.792 185.333 411.625 188.75C408.458 192.125 406.5 196.875 405.75 203H439.625V202.125C439.292 196.25 437.708 191.708 434.875 188.5C432.042 185.25 428.208 183.625 423.375 183.625ZM475.5 175.375L475.812 182.875C480.771 177.042 487.458 174.125 495.875 174.125C505.333 174.125 511.771 177.75 515.188 185C517.438 181.75 520.354 179.125 523.938 177.125C527.562 175.125 531.833 174.125 536.75 174.125C551.583 174.125 559.125 181.979 559.375 197.688V243H547.812V198.375C547.812 193.542 546.708 189.938 544.5 187.562C542.292 185.146 538.583 183.938 533.375 183.938C529.083 183.938 525.521 185.229 522.688 187.812C519.854 190.354 518.208 193.792 517.75 198.125V243H506.125V198.688C506.125 188.854 501.312 183.938 491.688 183.938C484.104 183.938 478.917 187.167 476.125 193.625V243H464.562V175.375H475.5ZM604.938 244.25C595.771 244.25 588.312 241.25 582.562 235.25C576.812 229.208 573.938 221.146 573.938 211.062V208.938C573.938 202.229 575.208 196.25 577.75 191C580.333 185.708 583.917 181.583 588.5 178.625C593.125 175.625 598.125 174.125 603.5 174.125C612.292 174.125 619.125 177.021 624 182.812C628.875 188.604 631.312 196.896 631.312 207.688V212.5H585.5C585.667 219.167 587.604 224.562 591.312 228.688C595.062 232.771 599.812 234.812 605.562 234.812C609.646 234.812 613.104 233.979 615.938 232.312C618.771 230.646 621.25 228.438 623.375 225.688L630.438 231.188C624.771 239.896 616.271 244.25 604.938 244.25ZM603.5 183.625C598.833 183.625 594.917 185.333 591.75 188.75C588.583 192.125 586.625 196.875 585.875 203H619.75V202.125C619.417 196.25 617.833 191.708 615 188.5C612.167 185.25 608.333 183.625 603.5 183.625ZM655.688 175.375L656.062 183.875C661.229 177.375 667.979 174.125 676.312 174.125C690.604 174.125 697.812 182.188 697.938 198.312V243H686.375V198.25C686.333 193.375 685.208 189.771 683 187.438C680.833 185.104 677.438 183.938 672.812 183.938C669.062 183.938 665.771 184.938 662.938 186.938C660.104 188.938 657.896 191.562 656.312 194.812V243H644.75V175.375H655.688ZM731.062 159V175.375H743.688V184.312H731.062V226.25C731.062 228.958 731.625 231 732.75 232.375C733.875 233.708 735.792 234.375 738.5 234.375C739.833 234.375 741.667 234.125 744 233.625V243C740.958 243.833 738 244.25 735.125 244.25C729.958 244.25 726.062 242.688 723.438 239.562C720.812 236.438 719.5 232 719.5 226.25V184.312H707.188V175.375H719.5V159H731.062ZM0.3125 368.562C0.3125 364.188 1.52083 360.167 3.9375 356.5C6.39583 352.833 11.0625 348.562 17.9375 343.688C13.8958 338.771 11.1875 334.812 9.8125 331.812C8.4375 328.812 7.75 325.833 7.75 322.875C7.75 315.958 9.79167 310.542 13.875 306.625C17.9583 302.708 23.5 300.75 30.5 300.75C36.75 300.75 41.9167 302.583 46 306.25C50.0833 309.875 52.125 314.458 52.125 320C52.125 323.667 51.1875 327.062 49.3125 330.188C47.4792 333.271 44.25 336.521 39.625 339.938L32.9375 344.875L53.1875 369.062C56.0208 363.646 57.4375 357.625 57.4375 351H67.875C67.875 361.625 65.3125 370.438 60.1875 377.438L73.1875 393H59.3125L53.25 385.812C50.1667 388.562 46.5417 390.667 42.375 392.125C38.25 393.542 34.0417 394.25 29.75 394.25C20.875 394.25 13.75 391.896 8.375 387.188C3 382.479 0.3125 376.271 0.3125 368.562ZM29.75 384.812C35.875 384.812 41.4792 382.479 46.5625 377.812L24.375 351.25L22.3125 352.75C15.3542 357.875 11.875 363.146 11.875 368.562C11.875 373.479 13.4583 377.417 16.625 380.375C19.8333 383.333 24.2083 384.812 29.75 384.812ZM19.3125 322.5C19.3125 326.5 21.7708 331.5 26.6875 337.5L34.0625 332.312C36.8958 330.312 38.8333 328.417 39.875 326.625C40.9167 324.792 41.4375 322.583 41.4375 320C41.4375 317.208 40.3958 314.896 38.3125 313.062C36.2292 311.188 33.6042 310.25 30.4375 310.25C27.0208 310.25 24.3125 311.417 22.3125 313.75C20.3125 316.042 19.3125 318.958 19.3125 322.5ZM111.375 358.625C111.375 348.083 113.812 339.708 118.688 333.5C123.562 327.25 130.021 324.125 138.062 324.125C146.312 324.125 152.75 327.042 157.375 332.875L157.938 325.375H168.5V391.375C168.5 400.125 165.896 407.021 160.688 412.062C155.521 417.104 148.562 419.625 139.812 419.625C134.938 419.625 130.167 418.583 125.5 416.5C120.833 414.417 117.271 411.562 114.812 407.938L120.812 401C125.771 407.125 131.833 410.188 139 410.188C144.625 410.188 149 408.604 152.125 405.438C155.292 402.271 156.875 397.812 156.875 392.062V386.25C152.25 391.583 145.938 394.25 137.938 394.25C130.021 394.25 123.604 391.062 118.688 384.688C113.812 378.312 111.375 369.625 111.375 358.625ZM123 359.938C123 367.562 124.562 373.562 127.688 377.938C130.812 382.271 135.188 384.438 140.812 384.438C148.104 384.438 153.458 381.125 156.875 374.5V343.625C153.333 337.167 148.021 333.938 140.938 333.938C135.312 333.938 130.917 336.125 127.75 340.5C124.583 344.875 123 351.354 123 359.938ZM227.75 393C227.083 391.667 226.542 389.292 226.125 385.875C220.75 391.458 214.333 394.25 206.875 394.25C200.208 394.25 194.729 392.375 190.438 388.625C186.188 384.833 184.062 380.042 184.062 374.25C184.062 367.208 186.729 361.75 192.062 357.875C197.438 353.958 204.979 352 214.688 352H225.938V346.688C225.938 342.646 224.729 339.438 222.312 337.062C219.896 334.646 216.333 333.438 211.625 333.438C207.5 333.438 204.042 334.479 201.25 336.562C198.458 338.646 197.062 341.167 197.062 344.125H185.438C185.438 340.75 186.625 337.5 189 334.375C191.417 331.208 194.667 328.708 198.75 326.875C202.875 325.042 207.396 324.125 212.312 324.125C220.104 324.125 226.208 326.083 230.625 330C235.042 333.875 237.333 339.229 237.5 346.062V377.188C237.5 383.396 238.292 388.333 239.875 392V393H227.75ZM208.562 384.188C212.188 384.188 215.625 383.25 218.875 381.375C222.125 379.5 224.479 377.062 225.938 374.062V360.188H216.875C202.708 360.188 195.625 364.333 195.625 372.625C195.625 376.25 196.833 379.083 199.25 381.125C201.667 383.167 204.771 384.188 208.562 384.188ZM266.5 325.375L266.812 332.875C271.771 327.042 278.458 324.125 286.875 324.125C296.333 324.125 302.771 327.75 306.188 335C308.438 331.75 311.354 329.125 314.938 327.125C318.562 325.125 322.833 324.125 327.75 324.125C342.583 324.125 350.125 331.979 350.375 347.688V393H338.812V348.375C338.812 343.542 337.708 339.938 335.5 337.562C333.292 335.146 329.583 333.938 324.375 333.938C320.083 333.938 316.521 335.229 313.688 337.812C310.854 340.354 309.208 343.792 308.75 348.125V393H297.125V348.688C297.125 338.854 292.312 333.938 282.688 333.938C275.104 333.938 269.917 337.167 267.125 343.625V393H255.562V325.375H266.5ZM380.438 393H368.875V325.375H380.438V393ZM367.938 307.438C367.938 305.562 368.5 303.979 369.625 302.688C370.792 301.396 372.5 300.75 374.75 300.75C377 300.75 378.708 301.396 379.875 302.688C381.042 303.979 381.625 305.562 381.625 307.438C381.625 309.312 381.042 310.875 379.875 312.125C378.708 313.375 377 314 374.75 314C372.5 314 370.792 313.375 369.625 312.125C368.5 310.875 367.938 309.312 367.938 307.438ZM402.875 393V334.312H392.188V325.375H402.875V319.625C402.875 312.083 405.021 306.208 409.312 302C413.646 297.792 419.75 295.688 427.625 295.688C432.292 295.688 438.188 296.958 445.312 299.5L443.375 309.25C438.167 307.167 433.208 306.125 428.5 306.125C423.542 306.125 419.958 307.25 417.75 309.5C415.583 311.708 414.5 315.042 414.5 319.5V325.375H428.312V334.312H414.5V393H402.875ZM451.062 393H439.438V325.375H451.062V393ZM497 384.812C501.125 384.812 504.729 383.562 507.812 381.062C510.896 378.562 512.604 375.438 512.938 371.688H523.875C523.667 375.562 522.333 379.25 519.875 382.75C517.417 386.25 514.125 389.042 510 391.125C505.917 393.208 501.583 394.25 497 394.25C487.792 394.25 480.458 391.188 475 385.062C469.583 378.896 466.875 370.479 466.875 359.812V357.875C466.875 351.292 468.083 345.438 470.5 340.312C472.917 335.188 476.375 331.208 480.875 328.375C485.417 325.542 490.771 324.125 496.938 324.125C504.521 324.125 510.812 326.396 515.812 330.938C520.854 335.479 523.542 341.375 523.875 348.625H512.938C512.604 344.25 510.938 340.667 507.938 337.875C504.979 335.042 501.312 333.625 496.938 333.625C491.062 333.625 486.5 335.75 483.25 340C480.042 344.208 478.438 350.312 478.438 358.312V360.5C478.438 368.292 480.042 374.292 483.25 378.5C486.458 382.708 491.042 384.812 497 384.812ZM578.625 393C577.958 391.667 577.417 389.292 577 385.875C571.625 391.458 565.208 394.25 557.75 394.25C551.083 394.25 545.604 392.375 541.312 388.625C537.062 384.833 534.938 380.042 534.938 374.25C534.938 367.208 537.604 361.75 542.938 357.875C548.312 353.958 555.854 352 565.562 352H576.812V346.688C576.812 342.646 575.604 339.438 573.188 337.062C570.771 334.646 567.208 333.438 562.5 333.438C558.375 333.438 554.917 334.479 552.125 336.562C549.333 338.646 547.938 341.167 547.938 344.125H536.312C536.312 340.75 537.5 337.5 539.875 334.375C542.292 331.208 545.542 328.708 549.625 326.875C553.75 325.042 558.271 324.125 563.188 324.125C570.979 324.125 577.083 326.083 581.5 330C585.917 333.875 588.208 339.229 588.375 346.062V377.188C588.375 383.396 589.167 388.333 590.75 392V393H578.625ZM559.438 384.188C563.062 384.188 566.5 383.25 569.75 381.375C573 379.5 575.354 377.062 576.812 374.062V360.188H567.75C553.583 360.188 546.5 364.333 546.5 372.625C546.5 376.25 547.708 379.083 550.125 381.125C552.542 383.167 555.646 384.188 559.438 384.188ZM622.188 309V325.375H634.812V334.312H622.188V376.25C622.188 378.958 622.75 381 623.875 382.375C625 383.708 626.917 384.375 629.625 384.375C630.958 384.375 632.792 384.125 635.125 383.625V393C632.083 393.833 629.125 394.25 626.25 394.25C621.083 394.25 617.188 392.688 614.562 389.562C611.938 386.438 610.625 382 610.625 376.25V334.312H598.312V325.375H610.625V309H622.188ZM660.938 393H649.375V325.375H660.938V393ZM648.438 307.438C648.438 305.562 649 303.979 650.125 302.688C651.292 301.396 653 300.75 655.25 300.75C657.5 300.75 659.208 301.396 660.375 302.688C661.542 303.979 662.125 305.562 662.125 307.438C662.125 309.312 661.542 310.875 660.375 312.125C659.208 313.375 657.5 314 655.25 314C653 314 651.292 313.375 650.125 312.125C649 310.875 648.438 309.312 648.438 307.438ZM676.438 358.562C676.438 351.938 677.729 345.979 680.312 340.688C682.938 335.396 686.562 331.312 691.188 328.438C695.854 325.562 701.167 324.125 707.125 324.125C716.333 324.125 723.771 327.312 729.438 333.688C735.146 340.062 738 348.542 738 359.125V359.938C738 366.521 736.729 372.438 734.188 377.688C731.688 382.896 728.083 386.958 723.375 389.875C718.708 392.792 713.333 394.25 707.25 394.25C698.083 394.25 690.646 391.062 684.938 384.688C679.271 378.312 676.438 369.875 676.438 359.375V358.562ZM688.062 359.938C688.062 367.438 689.792 373.458 693.25 378C696.75 382.542 701.417 384.812 707.25 384.812C713.125 384.812 717.792 382.521 721.25 377.938C724.708 373.312 726.438 366.854 726.438 358.562C726.438 351.146 724.667 345.146 721.125 340.562C717.625 335.938 712.958 333.625 707.125 333.625C701.417 333.625 696.812 335.896 693.312 340.438C689.812 344.979 688.062 351.479 688.062 359.938ZM763.438 325.375L763.812 333.875C768.979 327.375 775.729 324.125 784.062 324.125C798.354 324.125 805.562 332.188 805.688 348.312V393H794.125V348.25C794.083 343.375 792.958 339.771 790.75 337.438C788.583 335.104 785.188 333.938 780.562 333.938C776.812 333.938 773.521 334.938 770.688 336.938C767.854 338.938 765.646 341.562 764.062 344.812V393H752.5V325.375H763.438ZM823.375 386.938C823.375 384.938 823.958 383.271 825.125 381.938C826.333 380.604 828.125 379.938 830.5 379.938C832.875 379.938 834.667 380.604 835.875 381.938C837.125 383.271 837.75 384.938 837.75 386.938C837.75 388.854 837.125 390.458 835.875 391.75C834.667 393.042 832.875 393.688 830.5 393.688C828.125 393.688 826.333 393.042 825.125 391.75C823.958 390.458 823.375 388.854 823.375 386.938Z" />
    </svg>
  );
};

export default Logo;
