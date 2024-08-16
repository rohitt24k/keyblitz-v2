import React from "react";

interface Props {
  width?: number;
  background?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}

const KeyblitzLogo = ({
  width = 542,
  backgroundColor = "#353D3F",
  foregroundColor = "#FCFCFC",
}: Props) => {
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={(182 / 542) * width}
      >
        <path
          d="M0 0 C178.86 0 357.72 0 542 0 C542 60.06 542 120.12 542 182 C363.14 182 184.28 182 0 182 C0 121.94 0 61.88 0 0 Z "
          fill={backgroundColor}
          transform="translate(0,0)"
        />
        <path
          d="M0 0 C5.94 0 11.88 0 18 0 C18 9.57 18 19.14 18 29 C21.63 27.68 25.26 26.36 29 25 C40.09188366 23.40285687 50.25090838 25.58609005 59.375 32.1875 C67.84437115 41.26182623 70.62906115 50.71780694 70.3046875 62.953125 C69.79835344 71.91649319 66.39644817 78.61548023 60.22265625 85.0546875 C51.40638618 92.7708606 42.31214021 93.71110983 31.02685547 93.20556641 C26.38572919 92.73485714 22.18022042 90.98383342 18 89 C18 89.99 18 90.98 18 92 C12.06 92 6.12 92 0 92 C0 61.64 0 31.28 0 0 Z "
          fill={foregroundColor}
          transform="translate(250,34)"
        />
        <path
          d="M0 0 C5.94 0 11.88 0 18 0 C18.33 17.16 18.66 34.32 19 52 C22.8775 47.71 26.755 43.42 30.75 39 C44.52023105 24.51483989 44.52023105 24.51483989 53.98144531 24.171875 C57.79817428 24.46514416 61.29437179 25.02131264 65 26 C63.41060574 29.93214301 60.83657498 32.33020346 57.8125 35.25 C48.9475975 43.1388599 48.9475975 43.1388599 43 53 C44.12164409 55.92083962 44.12164409 55.92083962 46.09375 58.9453125 C46.43748657 59.51522919 46.78122314 60.08514587 47.13537598 60.67233276 C48.24206698 62.49943285 49.37037471 64.31200924 50.5 66.125 C51.23064563 67.32201518 51.9598286 68.51992445 52.6875 69.71875 C55.39431092 74.16763902 58.13254442 78.59694945 60.87109375 83.02636719 C61.41894531 83.92258789 61.96679688 84.81880859 62.53125 85.7421875 C63.01142578 86.52190918 63.49160156 87.30163086 63.98632812 88.10498047 C65 90 65 90 65 92 C58.6896853 93.18813457 52.15001887 94.36271911 46 92 C40.89079392 87.22026149 37.96611584 80.59516167 35.140625 74.29003906 C34.05462568 71.93410653 34.05462568 71.93410653 32.359375 69.82714844 C31 68 31 68 31 66 C29.74839762 67.08148167 28.49879619 68.16527922 27.25 69.25 C26.55390625 69.85328125 25.8578125 70.4565625 25.140625 71.078125 C24.43421875 71.71234375 23.7278125 72.3465625 23 73 C22.2678125 73.5775 21.535625 74.155 20.78125 74.75 C18.2928975 77.8931821 18.33139425 80.90121454 18.25 84.75 C18.1675 87.1425 18.085 89.535 18 92 C12.06 92 6.12 92 0 92 C0 61.64 0 31.28 0 0 Z "
          fill={foregroundColor}
          transform="translate(33,34)"
        />
        <path
          d="M0 0 C9.48608455 9.91727021 10.75 18.97294647 10.75 32.875 C-5.09 32.875 -20.93 32.875 -37.25 32.875 C-33.83202085 40.35106197 -33.83202085 40.35106197 -28.25 44.875 C-21.94808884 46.97563705 -14.63089822 46.96437912 -8.625 44 C-5.32110344 42.09385084 -5.32110344 42.09385084 -3.25 39.875 C0.39731135 40.17383433 2.37256648 42.02901927 5 44.4375 C6.05960938 45.39849609 6.05960938 45.39849609 7.140625 46.37890625 C7.93726563 47.11947266 7.93726563 47.11947266 8.75 47.875 C5.84713879 54.45481873 -0.57817086 57.85662009 -6.97265625 60.51953125 C-15.26139415 63.4913494 -25.53815495 63.29459434 -33.90625 60.7734375 C-43.9714942 56.02040552 -50.19015448 49.37262814 -53.93359375 38.9765625 C-56.8248951 29.20595793 -55.69600662 19.96031788 -51.25 10.875 C-46.64821777 3.00568009 -39.78240008 -3.09455309 -30.9296875 -5.65234375 C-19.3904799 -7.68768503 -9.75590734 -6.37886249 0 0 Z "
          fill={foregroundColor}
          transform="translate(155.25,65.125)"
        />
        <path
          d="M0 0 C5.94 0 11.88 0 18 0 C19.05960938 2.68511719 20.11921875 5.37023437 21.2109375 8.13671875 C22.24020676 10.74472119 23.26951554 13.35270802 24.29882812 15.96069336 C25.01273664 17.76959632 25.72660424 19.57851543 26.44042969 21.38745117 C27.4679906 23.99141648 28.49569991 26.59532317 29.5234375 29.19921875 C29.84122162 30.00461594 30.15900574 30.81001312 30.48641968 31.63981628 C31.98251925 35.42996029 33.482103 39.21851425 35 43 C37.06134814 40.93865186 37.60174386 39.79465172 38.58813477 37.11694336 C38.88506729 36.31949203 39.18199982 35.52204071 39.4879303 34.70042419 C39.80257736 33.83893265 40.11722443 32.9774411 40.44140625 32.08984375 C40.76914536 31.20720352 41.09688446 30.32456329 41.43455505 29.41517639 C42.48240479 26.59117789 43.52290161 23.76454544 44.5625 20.9375 C45.60661184 18.10724966 46.65228893 15.27760336 47.70115662 12.44911194 C48.35411033 10.68739357 49.00413251 8.92458551 49.65101624 7.16062927 C49.9447966 6.36633011 50.23857697 5.57203094 50.54125977 4.75366211 C50.79948013 4.05131943 51.0577005 3.34897675 51.32374573 2.62535095 C52 1 52 1 53 0 C55.86267567 -0.07325168 58.700719 -0.09238205 61.5625 -0.0625 C62.36880859 -0.05798828 63.17511719 -0.05347656 64.00585938 -0.04882812 C66.00393756 -0.03700518 68.00197783 -0.01906914 70 0 C68.71145383 6.49224348 66.87798164 12.38261601 64.40234375 18.51171875 C64.0519957 19.39484741 63.70164764 20.27797607 63.34068298 21.18786621 C62.21340362 24.02397635 61.07618352 26.85595128 59.9375 29.6875 C59.1580708 31.63505446 58.37893741 33.58272733 57.60009766 35.53051758 C56.4489377 38.40746573 55.29664183 41.28393198 54.14074707 44.15898132 C52.09880969 49.23890459 50.08702291 54.3276938 48.12109375 59.4375 C47.5324353 60.94437378 47.5324353 60.94437378 46.93188477 62.48168945 C46.25992092 64.20203487 45.59895989 65.92674959 44.95288086 67.65698242 C41.76218247 75.68880024 36.77728817 81.80028108 28.8125 85.4375 C27.80832031 85.91058594 26.80414063 86.38367188 25.76953125 86.87109375 C22.04777896 88.38814087 18.90886952 89.1280975 14.890625 89.09765625 C14.13652344 89.09443359 13.38242188 89.09121094 12.60546875 89.08789062 C11.82816406 89.07951172 11.05085937 89.07113281 10.25 89.0625 C9.45722656 89.05798828 8.66445312 89.05347656 7.84765625 89.04882812 C5.89840492 89.03708565 3.94919262 89.01915146 2 89 C2.14084796 87.20793453 2.28783701 85.41635083 2.4375 83.625 C2.51871094 82.62726563 2.59992188 81.62953125 2.68359375 80.6015625 C3 78 3 78 4 76 C6.44140625 75.5078125 6.44140625 75.5078125 9.5625 75.125 C15.16268947 74.26960113 19.22328294 73.06430906 24 70 C25.31777144 66.8662594 24.92570062 65.00574665 23.67993164 61.91601562 C23.36532486 61.11997925 23.05071808 60.32394287 22.72657776 59.50378418 C22.37465866 58.6465979 22.02273956 57.78941162 21.66015625 56.90625 C21.30038193 56.00491333 20.9406076 55.10357666 20.56993103 54.17492676 C19.41119374 51.27897976 18.23716543 48.3895178 17.0625 45.5 C16.30561717 43.61629632 15.54974753 41.73218521 14.79492188 39.84765625 C11.76796148 32.30220398 8.72129968 24.76495828 5.64794922 17.23828125 C4.90976306 15.41929829 4.17164186 13.60028898 3.43359375 11.78125 C3.08708267 10.9394519 2.74057159 10.09765381 2.38356018 9.23034668 C1.91223915 8.06541687 1.91223915 8.06541687 1.43139648 6.87695312 C1.01518288 5.85849304 1.01518288 5.85849304 0.59056091 4.81945801 C0 3 0 3 0 0 Z "
          fill={foregroundColor}
          transform="translate(170,60)"
        />
        <path
          d="M0 0 C5.94 0 11.88 0 18 0 C18 8.58 18 17.16 18 26 C23.94 26 29.88 26 36 26 C36 30.62 36 35.24 36 40 C30.06 40 24.12 40 18 40 C18.0971647 44.32382916 18.20003208 48.64675033 18.31738281 52.9699707 C18.35555952 54.43928862 18.39043182 55.90869639 18.421875 57.37817383 C18.46777289 59.49593114 18.52572372 61.6130759 18.5859375 63.73046875 C18.63306885 65.63928833 18.63306885 65.63928833 18.68115234 67.58666992 C19.00336279 71.03599934 19.44965825 74.44965825 22 77 C24.34987262 77.23527773 26.70556039 77.41386417 29.0625 77.5625 C30.99802734 77.68818359 30.99802734 77.68818359 32.97265625 77.81640625 C33.97167969 77.87699219 34.97070312 77.93757813 36 78 C36 82.29 36 86.58 36 91 C28.3201715 94.0719314 17.9797586 95.10104883 10.1484375 91.796875 C8.1469402 90.31261858 6.58651525 88.91612369 5 87 C4.48308594 86.45859375 3.96617187 85.9171875 3.43359375 85.359375 C-1.60030081 77.07470929 -0.2308052 66.27730418 -0.125 56.9375 C-0.11495008 55.38867766 -0.10582779 53.83984901 -0.09765625 52.29101562 C-0.07580207 48.52718572 -0.04138343 44.76366377 0 41 C-2.97 41 -5.94 41 -9 41 C-9 36.05 -9 31.1 -9 26 C-6.03 26 -3.06 26 0 26 C0 17.42 0 8.84 0 0 Z "
          fill={foregroundColor}
          transform="translate(402,34)"
        />
        <path
          d="M0 0 C5.94 0 11.88 0 18 0 C18 30.36 18 60.72 18 92 C12.06 92 6.12 92 0 92 C0 61.64 0 31.28 0 0 Z "
          fill={foregroundColor}
          transform="translate(332,34)"
        />
        <path
          d="M0 0 C5.61 0 11.22 0 17 0 C17 22.11 17 44.22 17 67 C11.39 67 5.78 67 0 67 C0 44.89 0 22.78 0 0 Z "
          fill={foregroundColor}
          transform="translate(366,60)"
        />
        <path
          d="M0 0 C1.73636719 0.00193359 1.73636719 0.00193359 3.5078125 0.00390625 C8.90516792 0.69892534 12.75642477 2.72032936 16.1875 6.9375 C16.92419922 7.81921875 16.92419922 7.81921875 17.67578125 8.71875 C20.74291284 13.11463892 20.30333866 18.31301208 19.875 23.4375 C18.66128078 28.50262744 16.27017538 31.64057021 11.875 34.4375 C6.47571419 37.34480775 1.8943753 38.3515893 -4.125 37.4375 C-12.87139175 34.69110825 -12.87139175 34.69110825 -15.125 32.4375 C-15.21267112 30.36487924 -15.23195873 28.28929706 -15.22265625 26.21484375 C-15.21943359 24.95478516 -15.21621094 23.69472656 -15.21289062 22.39648438 C-15.20453403 21.05598891 -15.19606907 19.71549412 -15.1875 18.375 C-15.1824866 17.03060058 -15.17792342 15.6861994 -15.17382812 14.34179688 C-15.16199488 11.04032059 -15.14550971 7.73893197 -15.125 4.4375 C-9.9884276 1.49287749 -6.05610344 -0.10161247 0 0 Z "
          fill={backgroundColor}
          transform="translate(283.125,74.5625)"
        />
        <path
          d="M0 0 C3.9439993 1.97199965 6.83491548 4.12563823 9 8 C9.33 9.98 9.66 11.96 10 14 C-0.56 14 -11.12 14 -22 14 C-20.86601307 8.33006536 -20.86601307 8.33006536 -18.1875 5.3125 C-17.68605469 4.73113281 -17.18460937 4.14976563 -16.66796875 3.55078125 C-11.84384889 -0.93440747 -6.26968856 -0.74509342 0 0 Z "
          fill={backgroundColor}
          transform="translate(140,73)"
        />
        <path
          d="M0 0 C2.92937654 1.81310142 5.43647949 3.87295899 7 7 C7.59873168 12.26883876 6.25400021 14.8846468 3 19 C-0.21694364 20.60847182 -3.52137222 20.61309149 -7 20 C-10.61391202 17.07811368 -12.74312565 14.88374526 -13.375 10.25 C-12.8528401 5.7246142 -11.15770622 4.2328897 -8 1 C-5.09704195 -0.45147903 -3.22738221 -0.37239025 0 0 Z "
          fill={foregroundColor}
          transform="translate(377,33)"
        />
        <path
          d="M0 0 C20.13 0 40.26 0 61 0 C61 9 61 9 59.34765625 11.6796875 C58.59355469 12.40414062 57.83945312 13.12859375 57.0625 13.875 C53.67312533 17.30150397 50.50908711 20.73200732 47.5 24.5 C44.5918662 28.0947765 41.61458668 31.58260628 38.5 35 C33.83187013 40.18681096 29.41882225 45.59921725 25 51 C36.55 51.33 48.1 51.66 60 52 C60 56.62 60 61.24 60 66 C39.54 66 19.08 66 -2 66 C-2 57 -2 57 -0.12890625 54.1015625 C0.71800781 53.28429687 1.56492187 52.46703125 2.4375 51.625 C5.91805548 48.1054467 9.22349244 44.61987192 12.3125 40.75 C16.58016785 35.4611402 21.01083943 30.32900276 25.48364258 25.21386719 C26.01111084 24.60961914 26.5385791 24.00537109 27.08203125 23.3828125 C27.54843018 22.85059082 28.0148291 22.31836914 28.49536133 21.77001953 C30.37913376 19.55399647 32.18307611 17.27115486 34 15 C22.78 14.67 11.56 14.34 0 14 C0 9.38 0 4.76 0 0 Z "
          fill={foregroundColor}
          transform="translate(447,60)"
        />
      </svg>
    </div>
  );
};

export default KeyblitzLogo;
