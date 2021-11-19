

import React from "react";
import {
  Text, View, TouchableOpacity, Image,StyleSheet,StatusBar,TextInput,ScrollView,FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Screen1 from './Tasks/Screen1'
import Screen2 from './Tasks/Screen2'
// import { color } from "react-native-reanimated";


 class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      isVisible: true,
      tirmnate: true,
      searchText: '',
     show: true,
     check: 0,
     View: false,
    showText: false,

     Categoris :[
       {
         name:'غرف نوم ',
         photo: require('./img/f61.jpg'),
         show: true,
         Data :[
           {
             name_photo: require('./img/f1.jpg'),
             color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/G44tvWgd5b8NhSDa7QiASP91tCBwCaxmgUQ62bur1d3VHrGFtS67l_iq7TDnmN8NLzY8rIU=s136'
           },
           {
             name_photo:require('./img/f2.jpg'),
             color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/Gv_-goMkWEGQGhHxLUa7Z-x4qBRX4mrO9brjt1-sWdiemIStqlYe223VT5FPzbTPAIs7Sg=s150'
           },
           {
            name_photo:require('./img/f3.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/Isz6ws06LDv34T8F8tk4mE678KlA2Klu-q4wD41SqgXHJARIFZEW0CN1EHjO9xocWcXX1Q=s85'
           },
           {
            name_photo:require('./img/f4.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/GqCKvJcud7Io3bMGbzxs_mXgBQKA4N7XHRY8_y4fPG1zQbSEjoCFcgBkKeLdFteZpCyf=s113'
           },
           {
            name_photo:require('./img/f5.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/rRujUImaLUcZHaaWAXiD13ZFMD3yprHl_EZbWFbLV2hUP19_iW9vD1Bpf2GPCFdW1s259uk=s152'
           },
           {
            name_photo:require('./img/f6.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/QXpa6DpB-W1UuCyOsxirRRYlKud04B0NkUDomPiqcbpMuoXOgzrtBKiSDUcJL0uyAHGc7w=s148'
           },
           {
            name_photo:require('./img/f7.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/101CwdAxSZPmslQaa60x1vQfKrSrb4ixreH_Ttbfd-nClqsqm_5fYnIbZcKI0xycZUh2Sg=s113'
           },
           {
            name_photo:require('./img/f8.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/JCOzCzx8j--7Yt5RuQOmPyCU3puOykqe52TUc72vfhR65PlUE1s2ggOdCmwfE3105vP34R4=s134'
           },
           {
            name_photo:require('./img/f9.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/NYUM7hp_A9PZxBBzrxP5i4JmFHELn3bpWMdY4f37mXDsiNqvajjByE03NRzPqEVUMlj6uQ=s115'
           },
           {
            name_photo:require('./img/f10.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/4bKZKIknLTJDj6tmMwVUWnoLRfo1q1VK6xnWGU1-T0pK7zcTPcYSQwFqM4jeSHxtuUv0=s135'
           },
           {
            name_photo:require('./img/f11.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/-5g4ox8cpG0MaAtuH3LGdzmpNDCUUQXBG4wI0CaVF4OzeyfhbfoKgXxFnxc7r3nKZrReLA=s145'
           },
           {
            name_photo:require('./img/f12.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/NkEwwXXLcCX378bcf6qOR8y07pQ-345VTbJ7gjZkFZePDIufg_bcuPQwnWLtuKIkx52J=s146'
           },
           {
            name_photo:require('./img/f13.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/DqGmD501zo0ci5yz1uOJTl6g--F-jl1pbceT0kEER4O31_hRZKWiSg02azYYXbssKYEc=s170'
           },
           {
            name_photo:require('./img/f14.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/9JW9NifeaOxBzMyKULFdgLrKofDM3xV4oG1FEfWw2SXBLY5dVhOndyJKeJzRdVwtTkwJPw=s128'
           },
           {
            name_photo:require('./img/f15.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/cVOxv2YANaAdsdD9VrWJfdNXUd39-Ri-TBMTZWPU0E-SZDxbE2ZkYyFhHfofOUFQQo2asQ=s152'
           },
           {
            name_photo:require('./img/f16.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/2X2qXM9FL9AOh7HBuB1HigCuoIZzlYuofOwmslU8DgswwNmf_wFRm6lKxOBBKItngyHOFQA=s170'
           },
           {
            name_photo:require('./img/f17.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/nWHdzqrl79MmyaZdRehKC74yZ7wYQTu2WfH3WUVYL8NtsbQqwtUhWKOJ-in8OqgM9tW2lcA=s170'
           },
           {
            name_photo:require('./img/f18.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/NXWBYfzU6zcGiMlV_3oq_ruHT2q6QKMF-CCoYh4s_fAiDDkd3WUmcKGRFmqM4NvTg95BQeA=s170'
           },
           {
            name_photo:require('./img/f20.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/thl72r5W14bhPk94O_x3Ckc1K3n82aVmyfruGRKaOi3kp2OMuwPMloLBSM8i-T-VDIU4kyY=s170'
           },
           {
            name_photo:require('./img/f19.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/Ryjj5s_aChZCOyKkS6bcu1OR04nvHFQ-JTsDoNk6YdeXZp8GK895oyFf-X1aMcCgPc1q=s170'
           },
           {
            name_photo:require('./img/f21.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/GeNbkjY_9alrcGwqr7ZvZBlDWouYqc1ehaMMIXieLYSe35CKUaUugx7GHhinai-3V3sW6A=s150'
           },
           {
            name_photo:require('./img/f22.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/CoBW5bts_5KvKENAF5AWFVYTULB0Zl8cM4W_XbYSup_QcgQjDTjJYq50niSN8dvNcb-ZSA=s152'
           },
           {
            name_photo:require('./img/f23.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/z3_z4qA708Yorzjo9kMi9hm-eHX5SPmpG0DkXBSp0UCwsz1ECFioio9cdT2_iH7RSUXGMQ=s152'
           },
           {
            name_photo:require('./img/f24.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/DgoYaQydxEkRKD6PFwHp0u2m8EDSqUw9mkIMt-3R95-i9HIaaowjfMTQVNEWazefqPbD=s170'
           },
           {
            name_photo:require('./img/f25.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/eJLO9VA3OaL7R1ZdzyMBwUtp9pLH7Yy-MU5Hxw_5TssqPNKxK6Z6tG0ofXnh4O60oQZ3Yw=s150'
           },
           {
            name_photo:require('./img/f26.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/jaXbP6J2vo9bFoDjAgNn-hLBQr8dL_zOz7Jq12vg7-1h331BQQq1OHJaXZG0T8cNQOEt=s170'
           },
           {
            name_photo:require('./img/f27.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/5argdGNSZfJUJN6d-tx9heo0OltB0QczIUeDw_6sPbimKs_9j5J7UnOJEzazFnx1tNdYFw=s146'
           },
           {
            name_photo:require('./img/f28.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/SO_-4dRMIkTM_1a2YDYwkbZAgUeXhKU5YglzFs45lYN1HokBewMIOyHos97KtN_AVU5y-bs=s124'
           },
           {
            name_photo:require('./img/f29.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/CHHEwVrnRNs23V_WwzeUj9JslJoGgNVuyXO0MQRFzFk9sJEh2u-iCCWd-PFoOtJOENlLHw=s113'
           },
           {
            name_photo:require('./img/f30.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/qbNNCVp3Q74SilRYz4wAKv9abcu2Q0N6tTpxn3t4wyzdPLwiRUTr15iWCHij0uO0tFNB=s113'
           },
           {
            name_photo:require('./img/f31.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/Xdmk7iSclLrTowASPPyg2MeC27j7q5T0fiPfiBpBBCI5DS5UCVwf7B9XHyabSaB-V9d0COw=s161'
           },
           {
            name_photo:require('./img/f32.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/RpI_ri518kR7gODTtRZhB5lxO-6JGE9fI37t0VUO6oO0l92WXcNDvzV1edg1qz49TQ8yBg=s113'
           },
           {
            name_photo:require('./img/f33.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/gs8DPdyvapcU4R6AUMuPOGWEC-ywB7otu8YGI8UaJbR_y1WB3tGV42ZyI-0s-VNgGwX6Dqs=s115'
           },
           {
            name_photo:require('./img/f34.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/SfwWnwAB0_kPiZugN7vQkOIDKEK_Csnyd0ugLdsqoUZnrCxg4g2J7Muv970FxDl5wY8TTA=s129'
           },
           {
            name_photo:require('./img/f35.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/DMcdUsLXa1qGEnlR11V3CCZwI8WcNliMXOlbD1KhSleZyyR8WsNcoJRWf2UGIFDoEZdH=s161'
           },
           {
            name_photo:require('./img/f36.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/VyRKQmfXmKcauhwwQ1Tf_sSCI1RQu5OOeWnTYnIerdP0DlQeQ5PqSkx4O2v0-yvybUYpow=s124'
           },
           {
            name_photo:require('./img/f37.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/TR2lXyvlYgGO4MHc54lJRuR9eLnJ6jUUws9c91irU61q6FImOmOw1OwYWe8EjT5hwV4uWFA=s148'
           },
           {
            name_photo:require('./img/f38.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/piJAYBtikbZ97BgI4vCZXbPN2_3iEVoi_wD1zs5ixdoBYX20RESanbSnwXv1AMUaMnzZ=s131'
           },
           {
            name_photo:require('./img/f60.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/mx4nlwIMcMqNUnT2mvqv6lUltbpEX0Zc3ZUUvsovbhIID1fZtRvAlCn-HwTDLMaMFMXLlg=s149'
           },
           {
            name_photo:require('./img/f40.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/rxEhe1I9uHE3_ffgxp0_fWBw6O0S1lGJmyeyy1HpMtlc9gocZyKZVDm0O0ijRqMb0ojCscU=s85'
           },
           {
            name_photo:require('./img/f41.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/d8B4McumvVtjSHLWJqbi2H4CiSL_-7RrMCIq3qoWyDbHWDZ1D9pPPRjva4aU3b5s5w__Gw=s90'
           },
           {
            name_photo:require('./img/f64.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/T36H1TAiFMt7UMhFfoBCvYOABYh-em7Bmnspi5pTW_wbyG4KPvR0n7D2Yloh_50fX4JW3A=s145'
           },
           {
            name_photo:require('./img/f63.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/WWhWDcIZwVM460QCfWRw05u8qa1L4YQ9jg3_V3-NqbDnLTu4n3TqqJn2So-ZLS1GLVW2KYI=s165'
           },
           {
            name_photo:require('./img/f44.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/sSV6F1wU_lbtRIw5krN4cL3o9Spmx2MVJg-mHae-HvmEktN4_IonO7CvwQAN0hPTTp556A=s102'
           },
           {
            name_photo:require('./img/f45.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/gviTvRUQqxFT7p2n3mMgOJOE8Ca8TxQcc0wWFiebbFnRLiMl1ZIld1TAEyxnkGdcxHWn-w=s85'
           },
           {
            name_photo:require('./img/f51.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/4dT3IqHbRRBIupjdY3KqqmgvBCFiW0l3qKnBr0mZElhYPTWAbEzmLAMN2kpFLlupgNL_I3k=s148'
           },
           {
            name_photo:require('./img/f47.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/SU6zBzenL0YxA7dQn87PfCzyR6yDWUzcR0_aeqwsjow97tmmXrA0O5duPWd6EAaCR3C5UQ=s85'
           },
           {
            name_photo:require('./img/f48.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/TuhdNF15DiMYpHyZZBbH3riKZp_AHHNYX427Jkj2Dpvw3vQXjDe7nIATKGFSa3KkRgcOAA=s136'
           },
           {
            name_photo:require('./img/f50.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/PcYKd9ipkhGpX_WkcrE57fh6KTW_qPHNy-EWtpcMJuRirEK_qIXrFBSuJRmSKCnnzsHF_g=s128'
           },
           {
            name_photo:require('./img/f62.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/4KDfdUbEg3EaPA_m145Y1h5lr6Tt18ybj31WclyTEUtx_mmDG7rnBp2EvV2vIQxVzV7KXhA=s150'
           },
           {
            name_photo:require('./img/f55.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/1u_uy738YfL1GTs6a04TaN7STM46UV3ua7Rj5a17SzjQOaoXWhFcUiedEjPlfEb-nfvnBA=s145'
           },
           {
            name_photo:require('./img/f56.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/NcXuduSEzAvyg3Yan72P58ipfrBaZtaSbCcOXHqzBxG5wNK_RpZQlTSBmobcba-h9LzwL_k=s170'
           },
           {
            name_photo:require('./img/f57.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/8wn7zk84zCR9lwxWV0M1hGRC85zcNNr7byHbF6hSsXPbYP6nJo4WIcSa3dhaJsmG28kkTw=s170'
           },
           {
            name_photo:require('./img/f59.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/jVA5EkgdQdDRLKFIwQURMM1bmdUioprwtHCLsskP4PJ-gH11PnZSTozVNzDrNG3QQEcNTgQ=s138'
           },
           {
            name_photo:require('./img/f54.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/jqn4p0uWovqhejL0Indu5PN4KnYVsbvmsjEvfRm5nv_ENHZa6IhrsIKjq4MiRuElCBg0=s170'
           },
           
         ]
       },
       {
        name:'غرف اطفال',
        photo: require('./img/a3.jpg'),
        show: true,
        Data :[
          {
            name_photo: require('./img/a1.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/8Hig9WXDWsBFQdViVMs9WE6Iq5vdv7gNp79DsTKukQx5BSBehj9pMHvplbfxPytdZ6Tn=s154'
          },
          {
            name_photo:require('./img/a2.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/ngtONP-N29PwfJaG2BsCGREMYiXYxdOX_vXUlU4kOW-sg_ogsJlDPLpusJDRe4FiQsDqVg=s162'
          },
          {
           name_photo:require('./img/a3.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/kIWFAE-IoVcZs_zvcY3_kewlTzCEDlFhNeltnYujlj7IzeSKnCj3u6rv6VSv3t357-03d80=s122'
          },
          {
           name_photo:require('./img/a4.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/2uU2ShibRYZKnN-iuGYjslcCcG6SUeXb0qsfNBShiicg2WOu-dmaaG20OZIWBwg7jgjO=s85'
          },
          {
           name_photo:require('./img/a5.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/7i9UA6mm81F_PiX7NEA_axrWaI-KSOKR7zAoBVMD8JnLBLWD0AEGPHjCJW54qb1iaJ30=s113'
          },
          {
           name_photo:require('./img/a6.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/_xxOlou_rmvdzxAX2N1Hp5DUTT5OXLO9ws591weRHyRobnOOV519MEChtHGC4IBCoWhI=s131'
          },
          {
           name_photo:require('./img/a7.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/kAgQ1WGgMGdeoIkX5OD1hsTE9aplnDGZjS8_4ar7VhCc0-hn-R4IQBJpi8NI7_T2OWv08tI=s113'
          },
          {
           name_photo:require('./img/a8.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/8CfLGjUDKiFTlpaV7d0hTNGmE5tiLrlJ78e_lgh2kvxJpEx96LWzRTovh38yGyVBZGe1lg=s170'
          },
          {
           name_photo:require('./img/a10.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/Sv_jLaaORIgPu1oLW-y_rBsTi5Pz2_H12U7InXtyQeY0Epsi0cEhPgc2PBMCeVzwsly0cw=s106'
          },
          {
           name_photo:require('./img/a11.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/TWc-UdE7xJwy3Y1E5OFTie9SIEOMsNwpFW0OggIP2z4BeirzL8yRPg90oTQUIoZXYf0SBQ=s85'
          },
          {
           name_photo:require('./img/a12.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/y7D3AMLhtmCWFepratJXUJ2WjkjrAGckTpCkH-v3V3alsfGtPkoBFi4VnVfdRfOXtatC=s128'
          },
          {
           name_photo:require('./img/a13.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/_guBb0N86kEovSv1TVMveoahjNoF-h15-yNVvPqITh6d2z7Ms98kgqFWoLYsXAiknDXQ_w=s131'
          },
          {
           name_photo:require('./img/a14.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/MpFeVWGkeHKxclo_hjELF5aQpPZvvuplm36sk93IfigQ6D2OUP6ycpbxsuVwpyxmK6NY=s152',
          },
          {
           name_photo:require('./img/a15.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/DZNtanXLNbfsfF9cyOmEsAgYVhAqPq9dOG9fwB4-OMHRM3iYdKXJxknMyqczaCF8uhgW1UI=s144'
          },
          {
           name_photo:require('./img/a16.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/00_nCnmeIhn4BqEmzyD1aTuE9SaMumaD4oeBT0mHsefzNjqRQDt-5AaprA3tF5i5Pci26g=s131'
          },
          {
           name_photo:require('./img/a17.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/In4RoGtPIlL5yCBn72ZI65n-W4VqtixEVmX-RB-7GSxudgNTcuiJKXqZonOMHMqunU1SfQ=s85'
          },
          {
            name_photo:require('./img/a18.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/HfyLSvRqOuVBLay1enm5zJMBDPAkrhnApj6IODCkrwAl7vrpAxElB2zJUS362k78OaamYg=s147'
           },
          {
           name_photo:require('./img/a20.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/OWnUSBXJvJCMQTA0ChXt1UTGQ30TQtGm6zNEdR7FAv7lX3P3d4nWHYshn4zbKKgPjZ1f2A=s128'
          },
          {
           name_photo:require('./img/a19.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/ZhBjrMgyBut23DjhSBmL3iDw4V8nShwjh2T7fJGli2P2WpNZu2b3azwe5phHT8ay7yHiFcs=s128'
          },
          {
           name_photo:require('./img/a21.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/tzKe-0-HaVkqK2pSvEdmjh5rCyVIN1SVADYmnhn6wpIDhXLGrIGJrQ4h0iHrss0xNvQT8so=s119'
          },
          {
           name_photo:require('./img/a22.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/zOer5AkLc8M4i7VTpJGScFEePleYKnc4xbIPRxNS6E7Fbo3FqpJiofDmgdcbKe5GEeUz=s85'
          },
          {
           name_photo:require('./img/a23.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/JGxfjw587g007IBeRfJRC_7mQZdKucx1kmloUNyPaefpAfeVGh1_lRZKJ2-uuakNV4ZUsw=s128'
          },
          {
           name_photo:require('./img/a25.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/BTH3GhnHoEweqVsGiBY0uJemjtl6MbFzJA0BRZn_mBo33HsXXObNQmzXcUSQJ5UquWAFlf8=s151'
          },
          {
           name_photo:require('./img/a26.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/sm1Gw54aFecTDkP0FttQEKjHgoJrhb3i11rhB9S4lQOlCza0g9-heBMhedFMxu4U3-dUWg=s115'
          },
          {
           name_photo:require('./img/a27.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/uvJGxl7BVBHdWqPSPE58dRaMIzTreducTytUBUhFR-0ZlVWHG5YkgZNqWaY6ESY6f5a8Kho=s135'
          },
          {
           name_photo:require('./img/a28.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/TwLSK_pV8Mkv2JrxKoggcVWTpZVO5vblcQ8Ds6UydFwBkDzyw5qkaREOcQfT3RI6MSGXZw=s113'
          },
          {
           name_photo:require('./img/a29.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/LKDa4H6zymZMOpGwbXy6JFKY0WGbPF4qzWXJfReTh-u_TXQqNfQbXqxWIU8PMxSg_LwJSw=s113'
          },
          {
           name_photo:require('./img/a30.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/YRrlF_nV7cLdPU_UKldcv9kWUr9w396PnJuHl063GG3JIINR4YFAnI-rPF5poFbXe080fA=s116'
          },
          {
           name_photo:require('./img/a31.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/SgVDhUr_Uk0Ugn4232YWjnB5erVL_pj0gVMQKWhPbcmASJcQwbnSNarlOJc6YYuS_PzFrQw=s131'
          },
          {
           name_photo:require('./img/a32.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/UGF8r8w7ZXBeXrkQ4shYN7IbNLZM1I_JX3xGXNAsqpHDxjTR6hD4tNaTtmoT7SKghHz1=s136'
          },
          {
           name_photo:require('./img/a33.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/YuoUNNQuHQgG14C4-byBBFMMoQWkLTzLCaxtBdFNRJAntS1ODwbsbYg2ASBZ4pb9Wx-SVA=s152'
          },
          {
           name_photo:require('./img/a34.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/uZU_bgyEQ6qUWBfirDGL_636IUNO8eD8-YEvD5CrXWxcnTUTFL2qat1kNZFELZ3moLWJ=s119'
          },
          {
           name_photo:require('./img/a35.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/h4DwDI9DYJwAMPDjZmpJNPgEprNbwOd3Zc4I0AyVH8udQK_NMNLi9kDq73T9lVGZiOdS4A8=s143'
          },
          {
           name_photo:require('./img/a36.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/sLAwklpuVDA5tuIUOxCSsuT4-FSo3Fcvl0aRzLejDSipvJgnE5D49xQU-x_FnBOo5_qdMg=s135'
          },
          {
            name_photo:require('./img/a37.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/N5gJWCyk3sN1hgjGBsTXDc_xAlJktXDzQaj7mFvUdDRK6Cebai0sCXAE3sAgCUVIgSlFqQ=s154'
           },
           {
            name_photo:require('./img/a38.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/UXfr1Ab_X7QxViJtYWgER8fSZiG5Y--XlC6ZVLVrIjtVI81sQqR82aSDfIHiZUvfjT5eDw=s153'
           },
           {
            name_photo:require('./img/a39.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/LxoT77RUfhZk1Uht3xLMfr5YubB--fVe6c3dhC-bLj6riVhdcyv0EPLxl0OecYQ2eBEdUFk=s170'
           },
           {
            name_photo:require('./img/a40.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/iFdyzGMieaMNRhrIgzh-quk3JZKxywqCKV5x8FdkTcmy0tXDE0X7bv9xcrd-ehSfDiCv0Pw=s113'
           },
           {
            name_photo:require('./img/a41.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/djc4_BRCYXoneKfgZvG4MYtrxoaJPzZR-PVrXR6VARW9J-U_QtApC1RNaLkZ447ENsWK=s113'
           },
           {
            name_photo:require('./img/a42.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/FeKvr1uOZ86LPYaSNYvuk-2Dn-Nw4kaMB6ajrvrTe0youE5kAFiwr_tGWIIeb9KDpNNAGw=s137'
           },
        ]

       },
       {
        name:'ركنة',
        photo: require('./img/b30.jpg'),
        show: true,
        Data :[
          {
            name_photo: require('./img/b1.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/THMvgqdu75ntcwVegRrpMd2Yj7TW2lPdHJz8MYO0L_fIMLHBVNOgOHHJ9wmmiN6XgOhmgQ=s162'
          },
          {
            name_photo:require('./img/b2.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/QEfC7utFunKQpsNOjQzehiOckmgBy7oWLwHtiqVyIaAU2L9sOxSLENt_yVPMG0EnrUiPNw=s170'
          },
          {
           name_photo:require('./img/b3.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/HGsa1ECzA1Fe3j-N_YLk-0Hd-S43zuUBJ_BWy-DwC_NRTu8gIRyuWoPIF4VReRAQmEoW=s137'
          },
          {
           name_photo:require('./img/b4.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/_zo6imxSz1yXBCIlS9rwXqXUs5XM1NGY9UbVxXe6jX1oXI7iQTUa2GD3uEx8MkyRl5oS=s170'
          },
          {
           name_photo:require('./img/b5.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/SYfoIu1MqSD-T9mw4vOU3P9sCzdpfgG9bgKeu5K03cm4_KabvHAT8fu6pb488aw7gHnjCA=s124'
          },
          {
           name_photo:require('./img/b6.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/esMTa5NTK8au-WSeRJzM7g3BLXZbH6CoeO7CF2Kulyt4fhcl5dXe_oCIKZqrOYpFJgnV1A=s170'
          },
          {
           name_photo:require('./img/b7.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/qDzNH-8NBgybLYiOnU7yG0GxUmTvwDp4oDoeKFQBJdgh8NOlqj4IWQUz7IBzgXzkI-SR=s170'
          },
          {
           name_photo:require('./img/b8.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/coYLWhjEVZWJcgQEqFCprSVWcyr4QuIyvjxK_koFB9Rqo49vTBnbwxRXeEzRaJgzKyx_=s170'
          },
          {
            name_photo:require('./img/b9.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/1t853wouWMuTBc18nT138SIOtxemWm4oAdUAmjDmThTuG2rGfI3MRdiS9WtnBqVNAhK9DQ=s150'
           },
          {
           name_photo:require('./img/b10.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/eHtJ21v466Iiz34XIkPk6JKHKlwOwuf9AnwGVB78MIX4raL5mda3_-3L4tyrrBBxncbuf2M=s170'
          },
          {
           name_photo:require('./img/b11.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/PPoTrTKka9KnY9k9UsjD4RpyrUZwoWi2djvb6pHL9q8zEEleJsjQat8FuUYbCxyCMZQ0HQ=s116'
          },
          {
           name_photo:require('./img/b12.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/oCEHR-NXZWMxT3XKqh7w7PbjXWiK7TWFlxo_jD09OucJnotOO1CrQp4IYXCJyUQj2Kxn=s138'
          },
          {
           name_photo:require('./img/b13.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/Cf5vmvq3tjDC4d2dJfDxiHYd4j0nHcV7Qm5BVWQuedTy64gqi4rjQ_v1VwqqudzVVtKS6w=s113'
          },
          {
           name_photo:require('./img/b14.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/iq8LsZBDOkmgCGGxMqTv3yiq7IRIVrllBaiArOKTvjIey4VKqRP2FivwHNmwofSONMUwXw=s170'
          },
          {
           name_photo:require('./img/b15.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/2nQfmmUkwq69Y2I_eollNlh7d52lnG1tKqMvpTIbJWJ_5kBhasnKrTJBEcvw7qX7oHgTrw=s109'
          },
          {
           name_photo:require('./img/b16.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/sR-lmar8TfYujgNBc-opk7woh8SlGqXkXLVhdk5-fqifxg83ieNisn4lXEKG8kZMTJySGQ=s113'
          },
          {
           name_photo:require('./img/b17.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/oH15ziBKUHQAWWjKhlZuX_NS5mJ9lduANAHjhHs_vVE8P6JeSYFW2M1buaUuYBYtduWnsg=s88'
          },
          {
            name_photo:require('./img/b18.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/H4T8ew4IZuQlo1Pg03Ps83ns_9zRoNoBcNn_hARMYQJ1C8d0vX6DEjqW0mIBAJCv87W1=s136'
           },
          {
           name_photo:require('./img/b20.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/Ln1KV_HbxWu3BYYKHLSJu_H80xzr1Txrs0kDINzDoXDpG3y1YDV_UaSFKMy3JrdE1tFy=s170'
          },
          {
           name_photo:require('./img/b19.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/6rZ6cmDnxUGWEJfgPrjfMlbscuA3EPaXsy1u-f3Eo5Fmks4bqxyrv3pibH7vaiEXlH7ScVw=s169'
          },
          {
           name_photo:require('./img/b21.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/hgv4bYBbRvg3_br4Kr7iQTXZFxIbO4qBu0rWOyfoXqVpbwuKt-6pNOuYBr4LO2TrDs3wRw=s122'
          },
          {
           name_photo:require('./img/b22.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/UOCt8_O_NiyFemT9_Lq1WvPv4nUWmCR7syYjbYtiYxvSmqhTiU5Je92nAL-HSy_J_gXZ5g=s150'
          },
          {
           name_photo:require('./img/b23.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/8WZk59p9PgFms2LjKcqDnSQ309tzaey38NhFbqKwl8L0C-yuBCNpvCrQhSfNeFfR2aip2A=s131'
          },
          {
           name_photo:require('./img/b24.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/nwO-30xZMCb8dpO0cZOLMxUUSOeKRnzwDrHObahY3rTF7mjszDL7_ny37APOWPoB5Nlp=s85'
          },
          {
           name_photo:require('./img/b25.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/Hl6DiJ6TWXMtHuRilxyX1ndgW-1FMnMpjvDCWBFqURihAWQVXrqLk09qjFaWsLVHK-2lKA=s170'
          },
          {
           name_photo:require('./img/b26.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/FPMC57eHN9IaVzJVU6HzzdUf2DB8H_fhZl1e9Yvk2i_O-nKd4JGO5xyUkUwx1V76y-Y8bA=s170'
          },
          {
           name_photo:require('./img/b27.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/o3XDrdIAkRclombw6ZrQK6s7DDkmVoEpxJLlr9J2xdrZxHHH81MGcsUL4gnuviiffkOP=s163'
          },
          {
           name_photo:require('./img/b28.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/au5KIZ2p5ACsqZdbGmekvsAhSVAqGVnlN_eNBjPjkpe8x724CoMgAju0Tiz6yagmrA2XRQ=s170'
          },
          {
           name_photo:require('./img/b29.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/7awc42Y5J4LSB9ufhtLpB8mge000WOnEB7EIPthZrUsziFvCV8tgtwsAY_k1hw8C8romGQ=s131'
          },
          {
           name_photo:require('./img/b30.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/WR1HBG27MAswngx2AnEqz91gebU12zIoY958gFEZRZQ3YgWM3LpKpjfXa7PnHGGhmOBkXA=s131'
          },
          {
           name_photo:require('./img/b31.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/GpqtfwiKQ41DWW7BHvYmiXCjW4OS8sw6Coj017MPxw9nSOfeyU8B7G1Pia5F9kH-Fw8hTA=s170'
          },
          {
           name_photo:require('./img/b32.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/rchbHGwzicX32PuMXyMiU4xmmauMjBjkNSIXaEjbrb4NfQTFWm8SqOGvZqp8xxFYwyA0TQ=s131'
          },
          {
           name_photo:require('./img/b33.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/6_1EFPUKjxnknMrK5rRoOUAzeVk8TYm5aF8hJqFcSQqtkoLoJZ_a-AcDV-kQj1y8N4ZBIQ=s168'
          },
          {
           name_photo:require('./img/b34.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/BKyIRYMZ5YLeGm601UE1k2vVImfeWjUGLkJn90iA00SOFOE5NqsxXIPpgWyduo8IQbo5fA=s128'
          },
          {
           name_photo:require('./img/b35.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/c3OkhhYfP7d2J9MffHSASOuHF22ej86wYR_NvetvHzvAgJ8FV5uAMDsdXl24CO9_zhSGFb4=s106'
          },
          {
            name_photo:require('./img/b36.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/Yd-vBVBEjbgmB7uxfZugm-Ar6dDrE77MljchWzC29SGKCMNk6CeXhupun4C57PCikvhKU5M=s170'
           },
           {
            name_photo:require('./img/b37.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/TxJriN5XxYYbwYdHC_EnEf_fWBoO4IyVUoUQbgs6gImoUIc7R3ifzM6yVWFxEohjqAIb4g=s170'
           },
           {
            name_photo:require('./img/b38.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/FwF1XhDclr-vZ-ESEJYOivNLJmcJJAvfFOct2NkNoB4k9Q8kjFRF0VU7tivPQ5moMPMOqA=s170'
           },
        ]

       },
       {
        name:'نيش',
        photo: require('./img/c3.jpg'), 
        show: true,
        Data :[
          {
            name_photo: require('./img/c1.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/DCL4NA3g2YicJ4baRrCPnY9OBNaMtirea_8YIJujfW5J17BnVyhhg_W6ONIlf08OqIe8=s85'
          },
          {
            name_photo:require('./img/c2.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/mkJUe125x4gtiD14w0ooqEOqAqWR8megSRlKKYJAgDagpCv_6tnB4el3il0jLMPMxNT2=s85'
          },
          {
           name_photo:require('./img/c3.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/HlsAxgztTcGfWTOYXnfsqJLOXpydvjuCoBh1N3mdjUtzvBckEbbrk5Y7FOcZjYlfE1kri38=s118'
          },
          {
           name_photo:require('./img/c4.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/XQ0pje_95bDfkygKt1YERH8dpIgztJsDdyYPCoUSqaSONHAfexRYYXCZC1PcJpDanYVx=s85'
          },
          {
           name_photo:require('./img/c5.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/oI0cETWpCzTp1pLlDLp3o_3eB2arxrjXnJ07LKup-3Ck1NrTQWOJ07GvJtGuLleLy1wUyw=s85'
          },
          {
           name_photo:require('./img/c6.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/AA6kEecVtxWYBan730fhuZTmI9k59a4-IEvpKAu-I2FHEMdNS-98mOjMWyVC1ieB2JZV=s106'
          },
          {
           name_photo:require('./img/c7.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/HgI-Yw8dEanh7xuF35lmyuEoutRHfsvWFjjweDXzyM-lLEf0BQMBIQ4GENYn4o5dw-t26A=s105'
          },
          {
           name_photo:require('./img/c8.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/RstEE3EE-_mKbVdSu81QeipukdNqj-K97Vy-m-28RnWq-CWMmVrJRqP2R6T46CJgRhYFmQ=s85'
          },
          {
            name_photo:require('./img/c9.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/uQhCw8l7qqkv3E2Y6AmIAEHCgN2tRVcezNnYiP1HhdFKdrmpFQF7meMrdpBYDefDXJKs=s113'
           },
          {
           name_photo:require('./img/c10.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/mOhTsKEmLgEAqlNaKsN9fSRFVxcjRdUUVUNPrxa6iHsIAqIZekQJ7alef8KF0L15JtRPDd4=s85'
          },
          {
           name_photo:require('./img/c11.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/kDp9yh-HNb2duamDtGCwAYEh5SMndN821HAn-YizhRZVIP612Xnl5ZZqU3U6Ph372X89j7k=s85'
          },
          {
           name_photo:require('./img/c12.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/lgf6N-PDRPhK0qry3II8ssUcmMtoSiz0XQRh3f07tcIrIawgqKy2dMCwPP-KbpPW6SMEKiw=s85'
          },
          {
           name_photo:require('./img/c13.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/XQaCDQTlQR8LMS38T6UcUYLBQ1ozdjTVfwwH2mQcBXrUWNxp933ZRcUzsPYgY6Pv-8iK=s170'
          },
          {
           name_photo:require('./img/c14.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/lzqMEImFgGvenC-Qj__An_W2HtwmO5jTpuaNaBkEUCeUXEhSHTt-b4u7wxmax20jGj7W=s170'
          },
          {
           name_photo:require('./img/c15.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/gzwVzu1HKLyQFvojjylIKImfYxyrPi83Ea5xZtPXTg0lkqdvtvB8eh0e_Kj3AVd_96eK=s170'
          },
          {
           name_photo:require('./img/c16.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/4AigW9qhuYeIjnfSSAfQ2pMe7WjmXIN28ikrlj20aBeE5YLcjM2UP1zokq9M17gxupmS=s85'
          },
          {
           name_photo:require('./img/c17.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/rEfEofOEqbOK-DNo4Uy-PRJSNsgMCjfF9zSk-TMmYTVFNtYtscl_76aQAjtJggl6CgdrWA=s143'
          },
        ]
       },
       {
        name:'ارج',
        photo: require('./img/d14.jpg'),
        show: true,
        Data :[
          {
            name_photo: require('./img/d1.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/dq49hHQ7rKy2agRUHedApSvUWIb1bpXO4vxsDJuFK-KS-L0hxm3dy7gs0TVFUIUwjfK0HQ=s113'
          },
          {
            name_photo:require('./img/d2.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/DE2dGyQqC2OfL5ABLggRhLt63giePM04ptuD3aK7XZpEFQSNjQPEjy-Keect5GKtr4pzmg=s85'
          },
          {
           name_photo:require('./img/d3.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/pmPU41rtbBBjQxqmuxiWqpS-xJXA90VUXwmC3JDWPmw7SxOmN1xtTsg07907Up8gTjSxSA=s152'
          },
          {
           name_photo:require('./img/d4.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/dRjDaT7NogwJ78YjYf3-Uex3bRPH09OqGT9cBqmfE3J_4mfwo29O7bqcfOyhxq7Z5x8yIg=s113'
          },
          {
           name_photo:require('./img/d5.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/87Cm6x7CdIrnFQ0wLn1dwJ507PZ4oxL69KcKSQiDYCQ7Ik7gHDWQqCbHbmPZSB9aGRFJlQ=s113'
          },
          {
           name_photo:require('./img/d6.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/DKPmsFmejVo0OKU7oAWxyVXeJ8Vu_QyZU_AEkokssCcx7nm6q9Te5il4sVgTPwq32DjeaSg=s139'
          },
          {
           name_photo:require('./img/d7.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/kBVGr956c5P5VSZfoCnFg8oXodqT_-8SrVlVrZfo50nmQ_LfspYUT96OXJ1TVlDQO1fNxWU=s113'
          },
          {
           name_photo:require('./img/d8.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/29tDp4n5AFkNCxpgtxqLwGhtR5-z2f5iXMHnHNaukjlJebu5whJQKXXVpEO8tGObPJXA=s134'
          },
          {
            name_photo:require('./img/d9.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/fkWUJ5wcgVlY6PgSMPZ2fnM7KHrkpR8f6OZ5c5rmlsZYNHq5rH7in8Lo8kc4fJXQhe9eIg=s113'
           },
          {
           name_photo:require('./img/d10.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/lfyVyYsFgiznCWjpw9rwgMvQhCC0bTh9G3KdRdsr8FOmMAxS_wfwcNwByntW8Z1x89ZW=s85'
          },
          {
           name_photo:require('./img/d11.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/jharsVh6lRiA1tOkkW-HcJMuU4x2ZnluG03T8qpOFb47pj04H0Js2uI3l-FF1skpMhmf=s113'
          },
          {
           name_photo:require('./img/d12.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/OHuLjrud-ND4D01Rjvv2PEHzxNMyXffYfK8P0yrw7zRJmducPqzNPc3Kb0hA8qn5ruIozPU=s152'
          },
          {
           name_photo:require('./img/d13.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/-9hhMdmTztgabPJMdN9ICp-_Hv_Jo2Xdply-udCO7wzbuvmUkgW8oOQVK3tXyRhPvmg=s92'
          },
          {
           name_photo:require('./img/d14.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/-fSlGkvaP-Z1Y43iDtLfs0DMOgnZahA7toTaZkBub5bQG73ZbvlBb-Om11lZgw8r2bpwcg=s85'
          },
          {
           name_photo:require('./img/d15.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/bXVbhl6rBFJwQpf9gW4_UMyAbq2pJaDcpPbT6dfuacj11sZx0xkl4DDSRN6z2pP-j0MsMXk=s142'
          },
          {
           name_photo:require('./img/d16.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/966DQPShx5Mv582myCZjjo0O7pJhALzNWSpxp5xBoKrx2H6SRcSU-zgA5Z-JXQHmaDj_=s113'
          },
          {
           name_photo:require('./img/d17.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/T1DjUrZXH25-7uVBOGlFr6GoOvvOnzoiB_rPn-SArdEWlBx7oFWDsiz3lApWAJwn7Uj2=s152'
          },
          {
            name_photo:require('./img/d18.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/_8Mp_uH7DFitziq9vUiLKvK4zAQlVmAQGe5Old_j15vUSxWFnNjENFrXN2HAvmMBw9w5xrI=s113'
           },
        ]
       },
       {
        name:'مكتبات',
        photo: require('./img/g3.jpg'),
        show: true,
        Data :[
          {
            name_photo: require('./img/g1.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/6SjiXkPk9-Vf4eDzuIVRCRjrTtQUGnmyFLhCA-UtyNrYEDaTm6LT_PprCqUYpqSJ7cDJvA=s123'
          },
          {
            name_photo:require('./img/g2.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/pBvKLAEimG4x9SxS5r-Z8xHO_IPxzdpfxuQaCdLJfbGQcHM06H-6x_1Lv7IfJNsxj8uB4g=s85'
          },
          {
           name_photo:require('./img/g3.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/bnTrsp8rPeyFmXICYDOu0SDHpe-W-gLnWFJL_bnFoEbO5sRNRCiFJ2WdIobkRYvIRnU7Gg=s128'
          },
          {
           name_photo:require('./img/g4.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/Z3SqSRvF6hmQqDp969VKJCugDYM7Ocw08Wx9nwhDYfGaMV-YBuwVBAsrBrstuAdGt5oR9w=s123'
          },
          {
           name_photo:require('./img/g5.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/Km8xPIotTJd0RQFEQIgPAW-zJUDnOs1GQ6E88qyOwWgzclV4U69kzlj0BG_Klm2NBgX6=s85'
          },
          {
           name_photo:require('./img/g6.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/sFFrvmuf7DrVmLY27Pfu7B_D_Wmlis23G-x33-8g_HURQ9g8hm7hEmkhvGXormJLviR70g=s85'
          },
          {
           name_photo:require('./img/g7.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/RF1sFfdEd4O2tTEqWUIPmcupdJSY7Ve1DiQI0y9xkX2Ik7FpMQOmsNa1SMIGbof47z2Ldw=s85'
          },
          {
           name_photo:require('./img/g8.jpg'),
           color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/2mTy2RKQ7k0Yh2_0nzbT_E8ZMVHD6V79zy5fO7ufPmLBWpBvr-f6TjhNQxcnfhD1EsFU=s136'
          },
          {
            name_photo:require('./img/g9.jpg'),
            color:'#000',
             visiable: false,
             mycolor:'#000',
             myurl:'https://lh3.googleusercontent.com/2_aVho-uOWJfouPHF83Gc1ZlYHJOKk3-5NDNTnbRldgkIUWjLR5Jd6vsbZghU5Z1nrVTDw=s152'
           },
          {
           name_photo:require('./img/g10.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/jH7r8kQUTHo0gGt_lRyaOG8vcVE-hH88Mion5h8BCktPKF02tOVkno5avqFa9z2Zn928=s85'
          },
          {
           name_photo:require('./img/g11.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/G_w0T9XUoEST3OnK-gMxTnd3BRb9JKbJyWyVcO_7W8-MjyWauoZv9K_in4ObyC6cL24_PQ=s102'
          },
          {
           name_photo:require('./img/g12.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/7tmGEHo6Gy6L-w3Qmm7rli9CWrLU7mKWXcEzw7XZidO8IAYn70LCk4HivZSx2eTHSm06=s85'
          },
          {
           name_photo:require('./img/g13.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/jaOBrl50iWWbpUnQiPp0cv19TAg8Y-QEE2K33zhXv5Dz7P2ZcdzCziZD69FduFzlSLUTAQ=s114'
          },
          {
           name_photo:require('./img/g15.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/hNFikbi6JbIRQ821gVeRxLhV-FWeBmRs1tY7I8FOgVcAegJrUKLzhrKuzss4q7tgPyjW=s106'
          },
          {
           name_photo:require('./img/g16.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/z-Q64jK7JLpaL53saw20I7780J8G78f0aUI2TTO5Shr6TTC4Fr9DGqBcxSAnzlkVxpox=s85'
          },
          {
           name_photo:require('./img/g17.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/AWVErh7RZObDlS7LOjZWFI2uwlTskqHxeBjfQJbPhw_2fqetBIxG1g-0sXMFK_brC-hN=s123'
          },
          {
            name_photo:require('./img/g18.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/kiivXwIEI9rF9hKuBw1W-xdkWw4zQe5vg_AnTs2eyobrSB7ren-9ghg9tZEmdvXktK8eaLY=s113'
           },
           {
            name_photo:require('./img/g19.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/hebNGYFoPai_814gKJmzyZH1usjruVaXWsqaRFy5PPMmQMh0VJoO9AYcXm8p5dVrWjjM2w=s125' 
           },
          {
           name_photo:require('./img/g20.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/9hIaV6vlTu3r8lBipx1Y7F6__4YSw7rIghKl6HTJUc6BGrXoBSRZS5I99nUH-TZ4Z6KZBKE=s152'
          },
          {
           name_photo:require('./img/g21.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/Cmlb72aqFSwMbXcbJGqTGFd_mkxTxFLDaI-XRtmCFTC8c7ANqKXqttiYyo8KrhxYageI=s85'
          },
          {
           name_photo:require('./img/g22.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/FtZ6PdWP2MZYvHmpCaFhZK0m3iBMkfU6WMTZ4d_OrmWDWl2qaj3BUNF4hZ1K4-BPdzBTsaI=s85'
          },
          {
           name_photo:require('./img/g23.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/09V_F9HU3MwIihAmBFE_nAeeomCCSCTvE6Ui-Q2CLYU0TSlIQqXoeHfuDpi0irlz1uPQeQ=s85'
          },
          {
           name_photo:require('./img/g24.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/sR5k-PvHfErKPduZFJ1i8Zq2O6tckonSM-hoiCTaecIXNVSlDw0fcjgV-imuLhAP4MxeIg=s152'
          },
          {
           name_photo:require('./img/g25.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/kOg78aihkbNxjnf03Fb_vqrwf6efdaImNmxagQQUESdo2fJvaOjj866FTfGJRETL8DkGcg=s90'
          },
          {
           name_photo:require('./img/g26.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/VOuL9_mV2Zhabpee2LgDxU5CdG2GhFlxkOkT_fPP7WwFsYSTgyjfJgs0teEkv9tH7q0Xsw=s92'
          },
          {
           name_photo:require('./img/g27.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/1yycQOvghZZ9VFjJucms6RNS-eLYvuA6NURHmQs14FbcQ_T2IhDSidsFma0Bk69cPL-L=s85'
          },
          {
           name_photo:require('./img/g28.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/RqJlTSmMZxrhebG__a2WcGDALOd_GGIEC8d-zgHBbb8V1jLh4IpbkVP60R_MZtD8Ztc-Mg=s114'
          },
          {
           name_photo:require('./img/g29.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/d772YSSU6-P4Yh6WSGcBcvFcwh3YUDLXMM8Jx6qTV3VZ3j4xzV2obzYP8hYGGtMvtXT2-g=s85'
          },
          {
           name_photo:require('./img/g30.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/-XcUY8-kJUVd2UlJz_TdmMO2RmrVwlAyM8srKC33zVnjNQsUokhVT1gI4tkRskDmU8ZUCA=s85'
          },
          {
           name_photo:require('./img/g31.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/9lIWUcv5p9nr-lKKRTs4yIOKTJ30Aqpc1gCsUKPWXUB0NX21HYntTixV8238uRd1dW2mUA=s85'
          },
          {
           name_photo:require('./img/g32.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/UKstswS0D8UbAgeiWF8IO2N9Dyzk5o6qK1fd01kahOKrqS_z1qhnnv-Ih-jT8QkVdl3o_w=s150'
          },
          {
           name_photo:require('./img/g33.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/g8rvKl4FDcgelPKvWkPRQ0HXzndGTMcJFkf_O-tJbaJlfmN66SZi2yBEOzq1G0_nL45KCg=s85'
          },
          {
           name_photo:require('./img/g34.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/Lo0LU9VSjzRrvuaV22MER1GO_1gNyQm8sGL2Wdt0M0o2Fb6qovPRTLJSkQuHKQRgdJj5Ag=s140'
          },
          {
           name_photo:require('./img/g35.jpg'),
           color:'#000',
           visiable: false,
           mycolor:'#000',
           myurl:'https://lh3.googleusercontent.com/k43VT4n71HCSrwllWepJCPeVe73-E6rE8vOeuPtjo_kn98w81UnE6ZrX9KDXoEb3SVDFHQ=s85'
          },
          {
            name_photo:require('./img/g36.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/VwwG_uR0ONGE7MGCryjW8NBvAGs-J6M6KWtGoLyZJk5wftdud9C2hnxE9a4_hlTDMcfJ8w=s109'
           },
           {
            name_photo:require('./img/g37.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/f5y5UMMt2o-Xc0C2LRFZb_neyq2gBljtOC-YpeW2u6sacVVo3WKTEfHs1Uww6uvSzDW3_g=s112'
           },
           {
            name_photo:require('./img/g38.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/BJVfb7pGHLohFoVJxV14TTWDHrrB-6mfr3C_oANX6B5gKPUQvO4XOSM6G5bZmOFz7t8k7w=s85'
           },
           {
            name_photo:require('./img/g39.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/7mwGXktxdbKxKgrhtAT6_aRGxAypPD8tTcv3ICyYWnFDcOm5lk5XZpDf4vnv3hJBxbYSoA=s85'
           },
           {
            name_photo:require('./img/g40.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/MIrYEVyshciCemXm2xfklMN8KInxQRa9OAmaTf6fjza1U6sK5dMiK562HzWm-M0tB6GCTfU=s108'
           },
           {
            name_photo:require('./img/g41.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/HJo2VPeZN0djokvs62W7eyA3Vo1xKhxGLAd1vg5y-tnEZFVzbugC9ieoTzj57FWWA4BQ7Q=s104'
           },
           {
            name_photo:require('./img/g42.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/OXW6KcelAL_ldppdO8gqMWagmKptCiiAMyFiFwhtYgC7VdKTTA30ijndu5l8RbNGPwLP=s129'
           },
           {
            name_photo:require('./img/g43.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/w1gZlQfoHQB7_TXAd3vESg7LeTGDpZwu9KEKGo8YAQJjmp0SgjVaguLXRvqeLpmKB0ISZw=s85'
           },
           {
            name_photo:require('./img/g44.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/rQRuPD5FkAUPvVz8r6wxtUNCzrLHVZBPYocZ9cT0ukBja0OlG1jnqvp-Qo5W1dRfHB1mpA=s137'
           },
           {
            name_photo:require('./img/g45.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/td4o1xHQj_iLrbbXjv11V1BzepRTllm5OG21NzuaZmH-LPj-K23oq_nZoNUyA2uNrWlb=s138'
           },
           {
            name_photo:require('./img/g46.jpg'),
            color:'#000',
            visiable: false,
            mycolor:'#000',
            myurl:'https://lh3.googleusercontent.com/W8nyiXYUmuvcjZIQa0gQ6qYZ9iQsIHSZyigru_xOynoyiDXnFire9911TYUb9-VeaavYZQ=s85'
           },
        ]

       },
     ]

    }
  }


  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 3000);
  }


  search(searchText) {
    let list = this.state.Categoris;
    let check = this.state.check = 0;
    let data = []
    for (let i = 0; i < list.length; i++) {
        if ((list[i].name.toUpperCase()).includes((searchText.trim()).toUpperCase())) {
            list[i].show = true;
            // return list[i]
            check++;
        } else {
            list[i].show = false;

        }
    }

    this.setState({ catigoris: list, check: check });
}




  render() {
    let Splash_Screen = (

      <View style={styles.SplashScreen_RootView}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.SplashScreen_ChildView}>

          <Image source={require('./img/m8.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
      </View>)

    return (
      <>
       <StatusBar 
        backgroundColor="#F04500"
       />


        <View style={styles.style_view}>
        <Image  source={require('./img/mahmoud.jpg')}
              style={{width:windowWidth*.5,height:windowHeight*.08,resizeMode:'stretch'}}
            />
            
            <Image  source={require('./img/m7.png')}
              style={{width:70,height:60,resizeMode:'contain'}}
            />
        </View>

          
          <ScrollView>
       
         
        <View style={styles.search}> 
        <Icon name="search" size={20} style={{color:'#FF5D00'}}/>
           <TextInput  placeholder="ابحث"
             style={{fontSize:18,fontWeight:'800',paddingLeft:10}}
             onChangeText={
              (value) => {
                  this.setState({ searchText: value })
                  this.search(value)

              }
          }
           />
        </View>


       
        <View style={styles.container}>
             {
               this.state.Categoris.map((item,index)=>
               item.show== true?(
                <TouchableOpacity  activeOpacity={.5}
                onPress={()=>{
                  this.props.navigation.navigate("Page2",
                  {
                   Data:item.Data,
                   name:item.name,
                   index: index,
                  })
                }}
              >
                 <View style={styles.style_map}>
                   
                   <Image  source={item.photo}
                    style={{width:windowWidth*.44, height:120, resizeMode:'stretch',borderTopLeftRadius:10,borderTopRightRadius:10}}
                   />
                    
                    <Text style={{fontSize :22,fontWeight:'bold',color:'#FF5D00'}}>{item.name}</Text>
                 </View>
               </TouchableOpacity>
               ):(
                 null
               )
               
               )
             }
 
           
              
        </View>
         
      
        </ScrollView>

    

        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }
      </>
    )
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      Page1: App,
      Page2:Screen1 ,
      Page3:Screen2,
    },
    {
      headerMode: 'none'
    },
    {
      initialRouteName: 'page1'
    }
  )
)

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,

      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D6D4D9',
      flex: 1,
    },
    style_view: {
      width:'100%',
      height:windowHeight*.08,
      backgroundColor:'#FF5D00',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      paddingLeft:10,
      paddingRight:10,

    },
    search:{
      width:windowWidth*.8,
      height:windowHeight*.065,
      borderRadius:15,
      alignSelf:'center',
      marginTop:10,
      flexDirection:'row',
      backgroundColor:'#F7F6F2',
      alignItems:'center',
      paddingLeft:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    style_map :{
      width:windowWidth*.44,
      height:windowHeight*.24,
      backgroundColor:'#F7F6F2',
      marginBottom:windowWidth*.09,
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:15,
      paddingBottom:10,
      shadowColor: "#C9C1D9",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      
    },
     container :{
      width:'100%',
      height:'100%',
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingLeft:10,
      paddingRight:10,
      marginTop:25,
     
     }
    
    
  });

//////////////////////////////////////////////////////////////////////////////\


// import React from "react";
// import {
//   Text, View, TouchableOpacity, Image, StyleSheet, StatusBar, TextInput, ScrollView,FlatList,
  
// } from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Dimensions } from 'react-native';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// import AsyncStorage from '@react-native-community/async-storage' 
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
// import Share from 'react-native-share';
// import { Modal } from "native-base";


// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       Data: [
//         {
//           name:'Mahmoud',
//         },
//         {
//           name:'Mahmoud',
//         },
//         {
//           name:'Mahmoud',
//         },
//         {
//           name:'Mahmoud',
//         },
//       ],
//       photo:'',
//       dark:false,
//     }
// }


//  async setItem(dark){
//   await AsyncStorage.setItem('dark',JSON.stringify(dark))
// }

// async getItem(){
// var dark=  await AsyncStorage.getItem('dark')
// if(dark="" || dark == null){
//   dark="false"
// }
//   dark=JSON.parse(dark)
//   this.setState({
//     dark:dark
//   })
// }

// componentDidMount(){
//   //this.setItem()
//   this.getItem()
// }


// changeColor(){
//   let dark =this.state.dark
//   this.setState({dark :!dark})
//   this.setItem(DatePickerAndroid)
// }




// render(){
//   return(
//     <>

//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//     <TouchableOpacity
//      onPress={()=>{
//       this.changeColor()

//      }}
//     >

//        <View style={{width:50,height:50,backgroundColor:this.state.dark ?'#000' : '#f00',alignSelf:'center'}}>
        
//        </View>
//        </TouchableOpacity>
//        </View>
//     </>
//   )
// }
// }





