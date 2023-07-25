import React from "react";

const SettingsIcon = ({
  className,
}: {
  className?: { svg?: any; path?: any };
}) => {
  return (
    <svg
      className={className?.svg}
      width="20"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_10142_93712"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="1"
        width="17"
        height="18"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.3385 1.66797H18.4092V18.9355H2.3385V1.66797Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_10142_93712)">
        <path
          className={className?.path}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.67365 14.5346C6.86448 14.5346 7.05531 14.5588 7.24198 14.6088C7.80531 14.7605 8.29448 15.1371 8.58448 15.643C8.77281 15.9605 8.87698 16.3313 8.88031 16.7096C8.88031 17.2513 9.31531 17.6855 9.85031 17.6855H10.8945C11.427 17.6855 11.862 17.2538 11.8645 16.7213C11.8611 16.133 12.0911 15.5738 12.512 15.153C12.927 14.738 13.507 14.4888 14.087 14.5055C14.467 14.5146 14.8328 14.6171 15.1553 14.8005C15.6195 15.0663 16.212 14.908 16.4803 14.4496L17.0336 13.5271C17.157 13.3146 17.1928 13.048 17.127 12.8021C17.062 12.5563 16.8986 12.343 16.6786 12.2171C16.1636 11.9205 15.7961 11.4421 15.6436 10.8688C15.4928 10.3063 15.5753 9.69213 15.8695 9.1863C16.0611 8.85297 16.342 8.57214 16.6786 8.3788C17.1303 8.11464 17.2886 7.5238 17.0261 7.0638C17.0153 7.04547 17.0053 7.0263 16.997 7.0063L16.5086 6.15964C16.2428 5.69714 15.6511 5.53797 15.187 5.80214C14.6853 6.0988 14.0886 6.1838 13.5153 6.03297C12.9428 5.88464 12.4628 5.52214 12.1636 5.01047C11.972 4.69047 11.8678 4.31797 11.8645 3.9388C11.872 3.6538 11.772 3.39797 11.5903 3.21047C11.4095 3.0238 11.1553 2.91797 10.8945 2.91797H9.85031C9.59198 2.91797 9.35031 3.0188 9.16781 3.20047C8.98615 3.38297 8.88698 3.62547 8.88865 3.8838C8.87115 5.10214 7.87531 6.08297 6.66948 6.08297C6.28281 6.0788 5.91031 5.97464 5.58698 5.7813C5.13281 5.52297 4.53948 5.68214 4.27365 6.14464L3.70948 7.07214C3.45115 7.52047 3.60948 8.11297 4.06948 8.38047C4.75198 8.77547 5.17781 9.51214 5.17781 10.3021C5.17781 11.0921 4.75198 11.828 4.06781 12.2238C3.61031 12.4888 3.45198 13.078 3.71698 13.5363L4.24281 14.443C4.37281 14.6771 4.58531 14.8463 4.83115 14.9155C5.07615 14.9838 5.34615 14.9546 5.57115 14.8296C5.90198 14.6355 6.28698 14.5346 6.67365 14.5346ZM10.8945 18.9355H9.85031C8.62615 18.9355 7.63031 17.9405 7.63031 16.7163C7.62865 16.5655 7.58531 16.4088 7.50448 16.273C7.37365 16.0446 7.16198 15.8813 6.91781 15.8163C6.67531 15.7513 6.40948 15.7871 6.19115 15.9138C5.66781 16.2055 5.05198 16.2763 4.48865 16.118C3.92615 15.9588 3.44031 15.5721 3.15531 15.0596L2.63448 14.1621C2.02531 13.1055 2.38781 11.7513 3.44281 11.1413C3.74198 10.9688 3.92781 10.6471 3.92781 10.3021C3.92781 9.95714 3.74198 9.63463 3.44281 9.46213C2.38698 8.8488 2.02531 7.4913 2.63365 6.43464L3.19865 5.50714C3.79948 4.46214 5.15781 4.0938 6.21698 4.70214C6.36115 4.78797 6.51781 4.8313 6.67698 4.83297C7.19615 4.83297 7.63031 4.40464 7.63865 3.87797C7.63531 3.29714 7.86448 2.73964 8.28198 2.3188C8.70115 1.8988 9.25781 1.66797 9.85031 1.66797H10.8945C11.4911 1.66797 12.0711 1.91297 12.487 2.3388C12.902 2.76714 13.1311 3.35464 13.1136 3.95047C13.1153 4.08464 13.1595 4.23964 13.2395 4.37547C13.372 4.60047 13.5811 4.7588 13.8295 4.8238C14.0778 4.88547 14.3378 4.85214 14.5586 4.7213C15.6253 4.11214 16.9828 4.47714 17.592 5.53547L18.1111 6.43464C18.1245 6.4588 18.1361 6.48214 18.1461 6.5063C18.6978 7.5488 18.3295 8.8613 17.3045 9.46047C17.1553 9.5463 17.0345 9.6663 16.9511 9.8113C16.822 10.0355 16.7861 10.3021 16.8511 10.5471C16.9178 10.7971 17.077 11.0046 17.3011 11.133C17.807 11.4238 18.1845 11.9138 18.3353 12.4796C18.4861 13.0446 18.4036 13.658 18.1095 14.1638L17.5561 15.0855C16.947 16.1321 15.5895 16.4946 14.5336 15.8846C14.3928 15.8038 14.2303 15.7596 14.0686 15.7555H14.0636C13.8228 15.7555 13.5753 15.858 13.3953 16.0371C13.2128 16.2196 13.1128 16.463 13.1145 16.7213C13.1086 17.9455 12.1128 18.9355 10.8945 18.9355Z"
          fill="#242627"
        />
      </g>
      <path
        className={className?.path}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3761 8.73047C9.50944 8.73047 8.80444 9.4363 8.80444 10.303C8.80444 11.1696 9.50944 11.8738 10.3761 11.8738C11.2428 11.8738 11.9478 11.1696 11.9478 10.303C11.9478 9.4363 11.2428 8.73047 10.3761 8.73047ZM10.3761 13.1238C8.82028 13.1238 7.55444 11.8588 7.55444 10.303C7.55444 8.74714 8.82028 7.48047 10.3761 7.48047C11.9319 7.48047 13.1978 8.74714 13.1978 10.303C13.1978 11.8588 11.9319 13.1238 10.3761 13.1238Z"
        fill="#242627"
      />
    </svg>
  );
};

export default SettingsIcon;
