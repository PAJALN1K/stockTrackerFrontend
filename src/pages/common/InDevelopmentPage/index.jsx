import ClassicLayout from "../../../components/layout/classic-layout/ClassicLayout";

const InDevelopmentPage = () => {
  const main = (
    <div className="main__row">
      <div class="explanation">
        <h1 class="explanation__header explanation__header--oops-header">
          Упс :(
        </h1>
        <h2 class="explanation__header explanation__header--name-label">
          Этот раздел еще находится в разработке!
        </h2>
        <p class="explanation__paragraph">
          К сожалению, данный фрагмент сайта, на который Вы перешли, в нынешний
          момент не работает.
        </p>
        <p class="explanation__paragraph">
          Приносим свои извинения, мы уже работаем над исправлением проблемы.
        </p>
        <p class="explanation__paragraph">С уважением, админинстрация сайта</p>
      </div>
    </div>
  );

  return <ClassicLayout mainContent={main} />;
};

export default InDevelopmentPage;
