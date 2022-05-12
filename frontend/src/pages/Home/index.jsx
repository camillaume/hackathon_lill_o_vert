import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div>
        <h2>Changeons nos habitudes & transformons la métropole lilloise!</h2>

        <picture>
          <source
            srcSet="../../../src/assets/pictures/background-website-LoV.png"
            media="(min-width: 700px)"
          />
          <img
            src="../../../src/assets/pictures/background-website-mobile.png"
            alt="illustration de la ville de Lille"
          />
        </picture>
        <div className="display">
          <p className="quote">&quot;</p>
          <p className="text">
            L&apos;écologie doit être aujourd&apos;hui au cœur de notre projet
            de société pour les générations futures. Grâce à Lille o&apos; Vert,
            calculez toutes vos émissions carbone liées aux transports
            quotidiens en les comparant à des indicateurs pertinents, et
            découvrez des cartographies de la métropole lilloise qui permettent
            de consommer de manière responsable.
          </p>
          <p className="quote">&quot;</p>
        </div>
      </div>
    </SHome>
  );
}
