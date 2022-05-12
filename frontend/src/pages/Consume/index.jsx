import Iframe from "react-iframe";
import SMap from "./style";

export default function Map() {
  return (
    <SMap>
      <div className="mapMobile">
        <Iframe
          width={(window.innerHeight / 100) * 50}
          height={(window.innerHeight / 100) * 25}
          src="https://zerodechet.gogocarto.fr/annuaire?iframe=1&fullTaxonomy=0&noheader=1#/carte/@50.654,3.143,12z?cat=all@+d6n14r18u22y25be31bg33bi36bj37bm39bd41bq40bs45bu47bw49by51ca43cc55ce57cb59ci58cj62cl64cn66cp68cr70ct72cv74cx"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </div>
      <div className="mapDesktop">
        <Iframe
          width={(window.innerHeight / 100) * 85}
          height={(window.innerHeight / 100) * 65}
          src="https://zerodechet.gogocarto.fr/annuaire?iframe=1&fullTaxonomy=0&noheader=1#/carte/@50.654,3.143,12z?cat=all@+d6n14r18u22y25be31bg33bi36bj37bm39bd41bq40bs45bu47bw49by51ca43cc55ce57cb59ci58cj62cl64cn66cp68cr70ct72cv74cx"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta
        nibh vel nunc iaculis congue. Suspendisse placerat in mauris at
        hendrerit. Nullam sed vehicula dui. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In vitae tempus odio. Maecenas suscipit,
        sapien at dictum vulputate, odio velit eleifend magna, interdum molestie
        erat est hendrerit est. Nam sollicitudin condimentum lorem sit amet
        fermentum. Mauris pulvinar nulla id ligula sodales, eu convallis lectus
        vehicula. In neque ipsum, tempus sit amet ligula eu, tempus luctus
        lectus. Fusce quis tristique orci, at viverra nisl.
      </p>
    </SMap>
  );
}
