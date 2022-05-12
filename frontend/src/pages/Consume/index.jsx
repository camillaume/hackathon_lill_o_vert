import Iframe from "react-iframe";
import SMap from "./style";

export default function Map() {
  return (
    <SMap>
      <Iframe
        width="800"
        height="600"
        src="https://zerodechet.gogocarto.fr/annuaire?iframe=1&fullTaxonomy=0&noheader=1#/carte/@50.654,3.143,12z?cat=all@+d6n14r18u22y25be31bg33bi36bj37bm39bd41bq40bs45bu47bw49by51ca43cc55ce57cb59ci58cj62cl64cn66cp68cr70ct72cv74cx"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      />
    </SMap>
  );
}
