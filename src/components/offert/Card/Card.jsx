import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./CardStyle";

export const Card = ({ title, date, imgUrl }) => {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextDate>{date} dni temu</CardTextDate>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>
          Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
          temporibus omnis illum maxime quod deserunt eligendi dolor
        </CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <LinkText href="https://goldipl.github.io/Marcin-Programuje/">
            Zobacz
          </LinkText>
        </CardStats>
        <CardStats>
          <LinkText href="https://github.com/goldipl">GitHub</LinkText>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
};
