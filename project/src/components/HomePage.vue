<template>
    <div>
        <HeaderFile1/>
        <div class="history_txt">
                        Art History
                </div>
        <div class="history">
            <div class="history_img">
                <img src="@/assets/History_main_img.jpg" alt="">
            </div>
                <img src="@/assets/History_main_img1.jpg" class="img1" alt="">
        </div>

        <!---------------------- History Cards Starts from Here ---------------------- -->
            <div class="History_cards">
                <!-- <div class="history_txt">
                        Art History
                </div> -->
                <div class="History_wrapper">
                    <div class="card" style="width: 40rem; height: 50rem;">
                        <div class="card-body">
                            <h5 class="card-title">pigs in ochre</h5><hr>
                            <p class="card-text">The oldest known cave paintings date back to around 40,000 years ago,and were found in caves in Spain and Indonesia. </p>
                            <img src="@/assets/pigs.jpg" style="height: 200px; width: 230px; border-radius: 20px;" alt=""><hr>
                            <br> <a href="https://en.wikipedia.org/wiki/Cave_painting" target="_blank" class="btn btn-primary">Know More</a>
                        </div>
                    </div>

                    <div class="card" style="width: 40rem;">
                        <div class="card-body">
                            <h5 class="card-title">Mona Lisa Painting</h5><hr>
                            <p class="card-text">The Mona Lisa, painted by Leonardo da Vinci in the early 16th century, is widely considered to be the most famous painting in the world.</p>
                            <img src="@/assets/monalisa.jpg" style="height: 200px; width: 180px; border-radius: 20px;" alt=""><hr>
                           <br> <a href="https://en.wikipedia.org/wiki/Mona_Lisa" target="_blank" class="btn btn-primary">Know More</a>
                        </div>
                    </div>

                    <div class="card" style="width: 40rem;">
                        <div class="card-body">
                            <h5 class="card-title">Greeks and Romans</h5><hr>
                            <p class="card-text">The ancient Greeks and Romans were known for their realistic, lifelike sculptures, which were often based on idealized forms of the human body.</p>
                            <img src="@/assets/greeks.png" style="height: 200px; width: 270px; border-radius: 20px;" alt=""> <hr>
                            <br> <a href="https://en.wikipedia.org/wiki/Roman_sculpture" target="_blank" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>

    <!-- -------------------- Upload Now Heading -------------- -->

            
            <div class="upload">
                <div class="history_txt">
                    Let's Create History ! Publish your Painting now 
                </div>
                <p>If you're an artist looking for a platform to showcase your work, look no further than our website! Our platform provides a unique opportunity to share your creations with a global audience. By uploading your art to our website, you can gain exposure, connect with like-minded individuals, and potentially even secure future opportunities. Whether you're a seasoned professional or an emerging talent, we welcome artists of all skill levels and backgrounds to join our community. So why wait? Start sharing your art with the world and unlock your full creative potential with our platform today!</p>
            </div>
        <!-- <SliderFile/>
        <div class="container text-center">
            <div class="row ">
                <div class="col column"><img
                        src="https://www.pnas.org/cms/10.1073/pnas.2117561118/asset/3dfa9aff-0494-4710-9444-dbbcea638298/assets/images/large/pnas.2117561118fig01.jpg"
                        alt="First Art"></div>
                
                <div class="col column">
                    <img src="https://media.istockphoto.com/id/1146367620/vector/abstract-white-background.jpg?s=612x612&w=0&k=20&c=v6spf6OW1BS6KaM4Lz3BEfYK8_o5hUHF_4NvcpBpn6w=" alt="">
                    <h1 class="txt">The History of very first Art</h1>
                    <p class="txt1">At least 45,500 years ago, a human hand had painted the pigs in ochre, making them the oldest known
                        examples of figurative art by at least several thousand years—and, by some standards, the oldest
                        artwork in the world </p>
                </div>
            </div>

       
        <div class="cardalign ">
            <div class="card cardstyle" style="width:200px; height:200px">
                <img class="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGR4YGBgXFxsaGxgbGh0hGx0bGh0eICggGholHR0ZITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzImICYvLS0yMDUyLy0yLy0tLS8tLS8tLy0vLS0tLy0vLS8tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIALIBGwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEQQAAECBAMFBwIEAwcDAwUAAAECEQADEiEEMUEFIlFhgQYTMnGRobHB8BRCUtEjM+EHYnKCkqLxFSSyQ4PSFjRjc8L/xAAbAQADAAMBAQAAAAAAAAAAAAADBAUBAgYAB//EAD0RAAECAwUFBwIEBAcBAQAAAAECEQADIQQSMUFRYXGBkfAFEyKhscHRMuEGM0LxFCNSsjRDYnKCosIVFv/aAAwDAQACEQMRAD8Ate3Nl4eatUxS6Vm4IUMgTprZ78oixqMMuVKQglSEk7wcByXLcgdALPCr/obAKDsGzswNzSOr+aosWxsKWluqpgVMQzFWYHIEZxMMwpSAlRLEaBvEcNWENJRLVMJWlNQoHO94RjUUemBJpWF8nES0nwLWspADqYDdDtcXc3iXB4QqmKZCkJUAApQu4eokHXOEvaTFIRtKSJhpkBC3KUBZDrWkmkpUDvIToYumycbKnS0LlTSpLlL00sAFZggMGA01jCUlSADnthhawiYSkYbOut5jmRvJUKSK5aBkclKX9Fe8BSQChrgmpRBsxUkJb1EWWRJUAL/kTnye3TjzhQVSzQAC6klnOW6CdeBjS0JoxjayTC7jSvWWECz9xglvCXJskDwZ8iYqUpEtWKUJYRn/ADCWS4CipQ9WdnN4uW1sKgoWpZIQEEKpuWUtJKugHS8UqUMOpUyd3ipiu8ICMrKvVzTmB0fSAmWySeqZU6xh2VPF9KWq7ZZ4Guld9BhFowplVJSlJUDu1NmSM/Jj7mGOHkpDikJYnTTQ/erxXE7ekoUHSO6Slg6d6pmHEMQ2mpiw4faUqaEKSsBwdxRAObZHgQQ8DFZbiFbdKUmabwb148vSCF84EWu9kv5CC1zZYDlSRzJEQDasgu0xJbgYwJhSKCEFJvZxkitNyemcMaeMBoxaDYalrcYKQFZQCbNfBQeDoF1IxgTESLvEeIlul0s494NnAteFa1uT5xNmXRhV4dlEr4Qr2gxKQlweHDrAzKa5MMcTLu+uRiCbLtk0JqUXrFSWsBIAjUpbi0SjEFNj9ICAs0E4IOqhvFxijKtlAk842UgVMMsLiU5mv0g5OMQRSlyo8vrFfnYfGpmslCTKyBBuAdSCRccnzGcGYBM9JBWA1hm+oimJrBgRXd84xJnKlKQog6t00Ngm6zxLdW14wl2qCAW4H2h4iYaSEi48TnIEs49faF2KlpIINw6kk8wbw09QcYlWlHeSnTRoG2bLYDj/AMQTVoYGkzjRupdTcWfrHcqWSRULtpxggGcT0rDJA0frlByEp9YjAAs+capuwdhxjgTC4YE88h0J/YxkJjcrGcEICjlEeKkkguLeVup4Rru16rV6xzMmSx4lLcHVKiHjzjKNil6qMBpwRE8KRuppYtkQQRbhlpBAWwF3GRBJJOgN4nRNBnU1Jsx/vKsbNkMyR1jWMQGLaEHpmfiOc7SCO+LaDrzi/KmLVLTfxb3PONS3cuPKFWPwrrYVCz2OcNEXJHTOFuNdgXOuphIKBNIdkOldDC5ClpU4J9YK/wCoL5ekBqXcZ+sbYw0iSg1IigZaTiBDs4Va94GwDM/OJcLiSlIZ3BCA+tSkhz1MSSF0WHUeesLNpmmVMc0kKRflWPpHQLJukxxlkQg2hAP6ixhN2mlK/H4egoXTKUQWQReYslxMNBLKDZ5RatnpmISArD7gcukShcvn3ZZg5Ph0EUnFT0oxMqapSnCXlhJcFjlmM7iL1h9pKUneKUOMg3DUhRHLrygiZhUA+kUZklKCQDUHUP5M0NJM9Kg/dqDW4c3u1ufKFk+QhRdRQKcju3cMXKg4ce0dnbcoJZc6SAQf/US7ZEF2Y3bqIiTPkPWpSbPcqRa18jwEarIPTRhAunH39xAPaxZ7ju0F63DghgEFJLkWAcNFIwuBXUONiG1qyHsYu3aRYn0SZUxO8pVe8kjNNj1pPSGeC2XJlgisA2u4OQbjwEMCkphm/X2hZx/EBR/Td41wbyfbFVkbEWqWkim6vzMxdncvZrRLtpLTaJKApSRvKRek726+SWJBvr5Q8x8xKUlCFJoAUsMA6lp8PoQ/QZQgwiQX7tACVXAA939oUVPNnsoQkEkvw208vtDKpJtXaCp9AzPtFWBHJ9RTcBtrBS5aQlzMXS5pJICi5NwGIc/MD9n9mKUSCqZo+SXYgli5cc7WJhsoKSyWNSj7CCZEukhTlKwk3zACiHtkRaJptq0SyAGeuJOuzrGG7TZgtQvKchgGAGgGuGUPcJh94EsGyA+zDYCFeGmMkVEJJLAFWZ0pvdxpnBonFvv9onJINYAsHDSOpyheFwKXt7mCsYotbMg3hTIkzHdZSByd4EsKyMbymzhopAUwDG9/SNHBpVaxgVE9rAFtS0FpWbC9+FviCSwlTXuuOEYUVIzaB17HSC5W3IfdokkSEIahI+T6xLJkgEuc7h8vJ9PKJlSrw2mSkVAbzPWyNDaFqDKMcgOPmOVyXYXF3joSlPYR3KdwCINLlh3jRbGkamYepCwM7MxYuDZ+UKp6gEkC28SRxJLkm2Zh5LDhXNrdYW46SN0gHwh7E6F21dyMuEVJY8Cd0KrBVLUB111nCWWsglnYB2zhlhlzaQQE+ZSfjyiMbPXvFmZyznw9RcwRgqxu0ZDXQ3Getxl+8FctSJ8mQpK7qxEC8WpJ3kknk3/xMTDHizy1P/iBPozgRiZqilHeSiSpzYkG51DCkNdtGZoWyMYEzEoVKUl1UpLLLqIem6WJa9jz4xlyBB1WYg+HrjhDJWMJIASB1Kj6CNTMiecD4idRNIMtTtoDy/rAO0tvS5Q3kLtmyVHMZBQtwHCNCcHjyJSlUG/p4CkKCsavfAHeAm7vQkhhoL+dnh1iJ4WlQCsyAfJ7j0jz+TjEnFd6lJqWWoXLUfHqGYvf7e3oa0pSksMg9hbJ4k9rSU9+F5kDyDcR0IpWYq7oIOT76knLDHOpjeGXvevxCqc7zd8nw7rWTa4ByPHrDJhEKgo94KGDMFPc2+HLRGkG6XyYeo6pXg8UlEBSTtGvtvzpChaGzER95HWKmOREUPoBasWEilYbDF3cq0FnsI1t2ckyJjMRUhqvOOEIkh/4hfIGlgDwiHblsNf8ykhnc5k/SOgUBppHAWHvRNTeOb4kkbXwD7KwnlBEzF4VKZctTCYGoBCgEuCQRozxdZeBlJqV3cu+oSE3Y5MLZ5jzipbMWZasPMCS/eTBUBkO6cp4jMN1h8vGmYxup0ueHDrkIAtYQA7/ALk1i/MTemKAb3wSfam/kVK2ZJmWEsIAFJpJQX1LoZyWd84hw/ZLCTKyqUBvLSHFyNFAlyPMcI4nYsypMyZwSkPwe1uBziDY2LnGUguQkuSZswrUonJrhrl2YWa0apXds/ezCyQQM8Rkwx3MeEAmk9+EJxZ+HEa7R8S7R7G4YTU0S5W+XpmPZvEyR4iVEHleAVdlpcsBSVSk3WCEoHFgOLi1uRjMKoCfMmS5iTqN2wU70ggWZmIFy93MPdn45BJJoQZahUkZAlIVfQGkg2j1qtf8sIRmKlsH3sehrArPLKZt8ioLiumFBz/aAJGwzNTSJrFSCk7oZL24P7xJ/wBBoSQJj0AJtZyzfPxDTDKBACWKc3GTi0ZOVuqyta4+jXziUq1FaEy1pdjr7b6w5fUiauYksTj15RWZ2HUFWKRTqqw5atrrE2DWVBKS5LE2L1BxcHJrcecWYYKVM8SH53Gdsxy0yhLjtnDvEyUgKYrIqtYAKD8Q6tOMZlywuUN/KhPXqIDPnqMy8Bpx9t1IImkHuytD726SAaVBJLjgWBHWC5a0qVmX4Gzws22VSsPUmSFKQpNkhRYHdJYF/CeOvKD8FMlAJMyZS4ch8j96QomyrUUlGZI4j2D+vEneBi+I6yeOcZikIUAshCTkpSwA4BJHoIAkdp8EvdE27szEdXsGim9vCnvFd1NK0EPyCsiA7khurmKnMQtKnTMs75u1shk0dDZOxguXemGuGAYephS12gy1pSP6Qc8+tY9nTtSSLpmIuQGJFv8AdBMraDkEMoM4YFuDvlHjn4xS0pqUolGQNkseLEBRbi8akJClAEGknPgKSM81EluVoMjsL/Wx3BvaAzbYhIJCSR5nridke0TNql7KDcKSkj1F4kG1ZSWep+F/2EeP/h6UBNKhmomygOAyIaFZxy02pBOgBPu1oIexZyDWYDwPzAJfaEiaBdQocRXn7tHvQ2zILAkvwNTx0raUsX+M48LRjlWJT1Q/pxMZh9qJd1CpOVNZ11PERv8A/NmJS5IJ3N7iNhapalXQ4ba+O4GPeZeMlqlkhaUq56cuduEK8ejIJUBW1W6opTujgRTYcs4oewtgS57qMolJUx35hAFiRdRGsXDB7MkyARJTQxcgqWvNQFnVawHpC38VKDpJYp2N7nnDws6gAQaHb60EH4nDCjxkkizcTcODkOPzGbNw7BjNz4ICCS6nzcmzZHjxIjWJxIYMPzg6XALv7e8DTF1F0hiENcmlR4EA3Jt6CMC0ySSAoc4wZTC8Wfo6xMNjTU90Zc8ApYF0lmJBVQytwM9jULCCfwwShSZmIWkEuSDSD5KzT0OnrDKmpShAqG6lNQIL58jbUAt8QFj8Skr3VrGQsSRfzP20DX2hKQHTU6Dpo2RZwqjsNd0bxmHpv+Olpe47wk7py3iu/mxig7dxMyZMXJTMqlndYGy21DC4NjfjFnXiESu8UTUaqRwOeb2EJtqzcLPKVKlqlzKt5Uopa995yL/3m9Wg0iamYrvDKLtQ4kHH6Rq2Iy0eBT5ZQLiVhiQ41GAr7bNkJtkgyZg31hJITchac/DcMHYtHouExCi78Mib5AR53LmSkzKQJilBYpuAmzkkkKz4fWPQdm0LAUXNTKD5sbjzhDtpkrdIYN8Z73ygtjSpUkrmGrtliHo1QzEZ4co7w67D/D//ADEaVpBWanOZS+TD7PWO6AFU2s9uhjlYJBtpnrEBOB6z6+YokA3d4ivzVR1VG8QiI6IqBYaLgYiLd+FQRlYXiobU2rhlAIAXLKVCsqSTkkhiHdyTy4xX8X2qxSzSJlI4JAHuzwslTSoKKiSTcnMkni+sdTKsShVezCPnaJ9xbpxY/wBp8qYRaVbWw/eoCSoITVvHJTpYFhmTccmtB8na4ryYKcFIUCrzUzhIsffhFGWGAtnBeDwyUzAkrCFUkvp4agCXOYa44i0bTLDKvOMgdThu4PTc2Z026apNcyK0FTg77MKja8WXEbXEzvk1MgSxT+aoqsVUgHwtk5sXvESkz58vvKVCkAWKiF3L2yBSychqbxvCnusThZC1AiaSCEJASGp8I/M9QL8jeHvZHCyf+4lALSqySqkm4qByFg/XgzQrJS6SqUgHAuasHuqGRq2jZjANtaJhTNQmaohwQRQVYEH9WtK78SCt2HKYSwpwd9LE6pB8OjAA5fSHezJSJiZoJACCHPNSQQXP5SWPmDA2PmSZuIwySVSyJikGWpJChNoLOXskhyCHCq/OAuzkkLVj5alF5KlFVJYzEkLCUnkClfqIUm2darxKasP7yPJ+REUJM5CEgIU1a8BltJHrkTDwYsBLMU07o4hvPlEK9rslV9OGdoMwmElrRhilRpXLsFkKKgEggE2LgPflA2NoSMUilIMuXUDyUlV30ukxz8yVMkqqNv8A2b1hoz5KgaV+22OxtAnM6uWLekYrGgKBdTtZw7vZvYekHbHKV4eUpgapaSSGNyL3HN4yXgXUwGluVz7wPvFg3W4RoTKX4mbj00cHGpSl923EgAPkHNngDE4pMy0xM0PqhSx8WPnDuZs4EAKQQBzDD3giXShNihvSKNmkTUF1U60LRnvJTUS53t6R5H2gShKloS5TUSkqYkZliwGR48M84UKRMsa3v+UAe3iix9vW7+aRcFjyukP984ri0iglG61yGtztxbgHjruz/HKCjUuTErtk3ZiblBcQM9vn6wFi5iyWKn8wzHpHQw5WSVzHNLADIdNFc4YzkuN7O7UuytciLRGJ1LBUtLcUj6HWKF0JL4RC75ahdZ+ucR4a3iKj533vmO1zgXHd/wC4xrvUaMzaggjzziafLpSCGY66+sauWypBLrroTXp2OHTQtxxKgwTSepgTA4VkF0EKc20ZuWrw2XhzSCW8MAY5VCXCiH+/sxupCmvKgMq0JKu6Q5q2vnHqmw1y5OFkAzBvMtzYEqT4fIe7Q3llIuAL8D8RXeyMszMHhlLSVEgtpuhRCT5NFmOCSMkkdY+a2pxOWCS95QPAnc3GOrlynSDqA3RgVZqzy0L3f0gJU5YSTYKBHz+0MUSN9rZWf1+Xjc3Bgmk6hi3X+kZQsJNa4QsuzKLNQ9fEB4vFCVK3v0Ag6kkfvpyhIjau8TqVCxt7gaxZcXs+XNlBKv0pIIzsISq2PKQpiV76gA3QX6Xg8qdICSFA3oxMlTxRGEV3tHjT36hKWpw1w1vzMDmMwesT4aUqYkVTFEgmtyXIIY38rQvx0ijElKhZQcfDHhlHAxxAUysrNfyfrFgSL0pCUaCu8Nl1R4RmP3ilK6MSYhH8NApfeSQRukEaVOXB4axd9loTTJUsG0tISAf7uZHC7dIoacS7DK5yPIkHyzDc49B2WT3EhLnwJLXAyDZZt5xO7XKgpIWa136cMPtFmwoCrBXATP8Az94mxOAlrUFBRTyf93jmUgDIv7wSl9Rrk2fle8DzZfEEeRIiMpSiACaQzIlS3vNWFeMw9/eIW/u+5htPlvYEhtDAn4Ff2Y2E3ImK0ucLviMeXSv5gJ4xPOKAoMGBgUzTUTzPzGpit5+Fo71d4rBD8+h5RwIoeDQ7kIQbADManKN/gpdQzIJYiziF2GxGX0hjNIABDu31MCV3ySAFEPhvjCgkioiybLlS5hkzFh9xSQWYpUKXvzbrBHZXFoE3FW3XKwXYAS1GwL2cHqxgTY6wrdT/AC91w5uVFy2v5RkYK7NpQrEYhITuOQBchq2Fi+gGmkSErEtUxQcCm8Ar2Z+LStdS9eZPXaBJB/c3SDTSmOL1iHbclOPVLmyq5bIUpJFjLmSwspJYkM5GR+LI9mbYnYc4mcuUtYxMlLrT4UrmBRSVcA6s/wDiLbtOYjBVhCXNKSQQLgFVY3QBUQu1mtyifaGCQuUpHgqkiWEmzCWGccH7xBHnDvfXEuzppva9s3NpTDXKUX2vHxV3PCnZXajDk7PSJgSmUlaZxJYIUZZSkKezEvfyjrH7TlGdjFVpPeIlokqF0ksq+d2J0fSINlbCMxODmrCTUO5KSkZJCyCXF2SFHTSAO0P4rBzp3cy6ZSQhThw9SgkUnIMSXGWdoWtEoTZt0gAs1S1e8fFsaAhhUcSfAFKXSfKv08tmO3NotGx8fh8PJw8uZNRKUU2TMdBJJuog3SFG7ls4e7UVMCEmSvNjUCCD8giKbsXYC8bI79Zw5KiQ65Jq3Sz1y1IJJ5vBuPwvcGThqwUTAailS0LSAzl1rVu3Of7mBfwMpCTcWe9N4knDMlsMg2IPNo3lz1IIKk+ENxyrDTGz8RLQFmYlYyUgt7HjFbVtVZVmw4ZRJidgLQoqk43Ey3uAsmcA7Wcg26tBezdjrcqxJQuW71JSZaxlYJTuq1zDwsJRnJHic6eInmx5PFyVapUlLzUU1F30cc92MU3tLiFFSi993qwyhYnFFmfy+nR9ItO2MDLmYjEeMITvJEsDgMifCOkIMTs0JISnMqULmosAnPnc6R1HZiSmUlJxHXtHNduT5a5zg0KUnmH9xAU3aBypS18zl9vHCaXIG6NA5I9/n5jtMsVUnJ29/iMmpIJDIpNwTn5DyikptIioUQWf9oxUgDl13T+0SCTY+JJPNx/X1jlKlJN0gPo9ukSGbwDDhpGoISXIjYhUxIuq40jqcpYspm4in9nbyivbQC2Jz8r9eItDbFKLnNuEDTE1pbUOoa825RlSyaR6TKTLAUesY9W7HlZwOGY0qTKQLh7UgjPKzQ8mJmkeO/3wEA9lcOU4TD3DmUgtwFIYHo0OGbO3n+8fK7Z3iZ6xtjrFJQqo0GZhWqUtJAK6iSS7EcPvrE5dKXOdzfyMbneIZ8ubx1j1uB1+IGJqjiYIiVLBTdHqfWCEgNpw9IXzLlKv0ufpBeDJII5n6RHIkE1BuOf9Y3SCrAE7gd0eHhd4pPanDkTUzLtdPocxz3mhEtBocvckM3JxfjlF/wBu7LmTUd2lhdzvAC1wFH9PSE+J2bLSu6lTSnJJmJCXVYG2QchrO4EdhYZ38mWCKjeKDDENnrtiDbkJTMUp8W+PaKguQqXNCFu93Fv0m3L+keibGxX8GUKmaWGAFybN05wo2rIw6sPUEUzJZSAoi6nSXSC1wLZtkYn2KUKkgWJCHLlTJ0dk5e8LdoBM1SSoYD56+zx0PY6EzOz1Nh3h2/oSIs2EVcMCknMu37kxskFTVdYDklSUJMsBKvy0m6gQ9kqBV6NnEinJBVLCHGQNixzY3HWIk2zgS79eXy/WEFUhlUPz59boJMofqEd08/eB0iO35QheEaFJGceJqCM3MSS0v/WIpUolRJZhflD+dgC7ApBSliAXyAzPVukfSe+QggGjg8GbTfHFzkKOFfvCnujBP4h0gF7eUHYLZ9YeoADMkn4AgVWFBG4p9S4ZVuAJ+IOFyJq7t6obg7tXAE6GsJhc1AdQpVvnHCDtmYmcT/CSskFwEpJvk+uTu8OsDXgpxXNT4kmqllHMHJxFWkS1hUspJDqzcg2YG48/mJ5c+apJCjMJC7KUScwHd9Le5ibNswVPKXFwsD/VgSGZxQgPR61wrRFpUlCWBvDCrpxbfhlsixY7tCFonAS61rDpUUEAC6WUmoukAs9s9c4GkdqGK3khT10mo1CtQUkDNqWA4bo4Qjxm0pz05hmYMC4ytYHzgFKZhBUWS3E3L6Ck5wwezpbU+d1acso2RbJ5+pQ5bdK+tYt+C7UCUZRElbIuxmAvZQNIpFL1OW/SIV7d7VLmqmh6ETggFNlUhAcAEj9TqyhCrb85O73lzZ2Sr1CgYJw2Mmz3IFTByQGGWjNf74RrLsqkrBIHMnNxiBGZ06YEElWHDZkAYc7I7XLkSE4dASECog3JFRf9LEO/rCraO0Zs1dU2YCSwcMGSC7MGbj1ML8cu7MQ1i6nc8rW9YgE9ILKQp+Dl/iGU2coWVhIfUAPzcMOjADNvoAvltCSRq+b5VNdsWvYO1CZ6KphbLN7Us2eXLlF3RiyJqDahiAKdfPya/IxQNl4MKmSKEMvJRUoMTYmkWdkkBnv1i2YacsYkyu8lgoAYFJZjVcCvd4Z5NE+0lF57uCcmdq7TSG7OVkN3gqRjeIfTAYaA8w0FYIBWMxCkhKklKUkEhhYO46acfStdqNm0KK5aSmWCVOC4BW3RgQwH7Q8wtS5s2YhSQTTvd2WNrkOXy+YNmdmVTUqSuaCFN/6bDiGFfGMS5ypBcuOuvOGJyEWkhlpZk/1YXRonY8ecqwpLHvK+ICWNzzERzwWsUvmzOeWXLmY9L2f2Nw8pJSod4SKqmKWbTMxAnshJMtSpKSlYSSk1qepnu+n7mGUdokqZZYa58dOAMLTbDKSP5QvKrSrDRnxpq2TbPNkuWF/F+ks3VvaOlylBVmUD+kq+o/eLEvYuOy7tRHIg/BhZiMJMleNKkv8Aq49bRTQUTKS1pVuU/wDaREpa5kt1TZak70N6gwpnT1OEqF2dlEA9LP1iDEyiU1Vg8Gvp5M2mecNhJSzHWLLsfZKUSZq8QaJapaksp0lSVAuoOOALWgdrQZEu+tW7adB7waw2lM+ZclI3nZqacoZ9ksSZuHk2EwBAGQCkFIZr53djaw5Q2xMlK0GhC6jY7qkkH/UCONoh2VLWjDYNUqXV/ClBbqCWBQKlB9bC2t/OGpxQcuaGNjm/n+n4j53aVCXNN1mxx24N8M++OoULwcnKFWEROSAlKFkf/kUVX81Crq8GzpiiLpsOQOnHz+7xNMnLGgUDqGB/Yj06xyliBlc382JPvCsxV7xMOH7waSwo+ECYnErCpVAUk/iJTkAgEElx5RY500VcYre0ZgSJaiWCJ0tRPBIUXJ5Zw6UYq9nAdyW1jW2Fkob/AFf+fmAMeAVKclIU90kjIDhFa7R4sWSDYDQAa55iLBt2cEy1Ft5ixFzflFBxGLcZrqycUhmu1lBRz5xbsyHrHNW6YHKSdprFm2pKJlTBSBSkF90vuhRsDum5gfYMr+EFBiyblQUS75AAuzNlBPf99LmuSQQ/O6A2ZZs+oeBNgTT3aR3a3uKhLeznJvmFrUmoEdT+HyV2WaE/1g/9T8aHdDLDqpNwktlRUhR53SWH+KJBi1KWxcsGep9eOsGzcSAwCpgUQwqNBV5UupoExAIWCdQLuC7cxn1vE60SwmWQ/XpD85bgqKasW+1PSJVKBDEExNWOBgSaspvSk/5vo0FS5bgFs+Y/eIhBbZvgC5ssGvoY897B9lhjQqZMJRKQad1qlK1DkWH7xcl9l5KkMhBFLgLK8xUbm17C3SJv7NcJ3eESGutSln1b6RYCAJIu1reb+8draZhVML4Dr1jn5clKkh84qs/svIUhZRWFMSAFMCwsA4twjqR2dlfh6TVao1E3AuQ1mA/rFiE0BKn0At7QFtdFaFSyWSu2eX39YFLqXwqOveBzJKEktofPD0jzOZJ7pVLELFWripjce1uUGTdn4JSECaqcgqW5BAVdAyB4Goedog2zg+5WEA1UgqCgG1Lg9bdIXYuauY1RDh26xVFlFpvKCiPFiC2QahcZg4OCKGF7XMRZ0SAE1MoEvqVKGytFJcMD4cYj2tKRKnqSLISUqDhvEnUCw1MJl4+pVlKAFQYbxIUWIYWyvc/tDPHrUtRWu5JS58gwHpC6XJpJOpPypX9IpokkISlWTbchCAtCb6lpGOHOmGm+BxKUWswZ88r/ACwi37N2jKTh0oYBQF+JLOfPN3itoSHzz5Rqa6Q7GNVWcKIfKsZmze8Fx26aGGOxCVKJblp5fDRqVhUkVEFQ/SbD1DEGAjjwz93qQ9Wbcm+2ibA7RAzFN9IytKgaQVFy4E4Ntiy4ABKZX8M0ygpQIIJUQpNQfQ0lP+lOUWTZW0VTZpDghQUpyllJ5OfFY6WsYRYXEpIEpQsvvMms6UXGn5YabOqlhCpawXSCak+GoB6SOf8AwYnTAmakuK5cTxz/AHjYmZZVgvR6605Zfto3wMwmatxbcYA8Pm0Pdk1NcljcPllp89YSyXeokOznz89dbWhlsh6VVl1VGx0B8Lcmb3hCclkdaw9Ln94oHqgbaKjJ+MMMXMzS+mmcc7NlpBWwYEtm4tryED4CVvLXzYcmF/pB+EVflAFi6WhuUm94zk7ajjjCPD7QCCpiCLpd7WPL6x3KmJVYEDl+0JuzeEXiRPCVUgrmAKTmgquFDiLwxw+yJ+H7szUCcQWWtBpsHZRDa2DNqYiGyrSi8PpB3sNcHphmcOHQWgS5U5Up/E3QhjLw8tBcIFXEJHzAW28QJktcpYJqQsDSyklJPAs+XMQ9wmNwygwNB4KDN9IrvaqbT/KKVLUCEEM9QezcbE9IIuQqkxCwoGmL/eEBVRQpLHbT7V3x3sGd/wBphwoMRJlgjhuCJ8TgUzBqCdeXPpaK/sXGKUiUajSWDUiwCSkDJ3qY6ZRZZZJSCCzh2OkS56VSZlTXZls365b43EsFAcULY50xiPDYNSUhLkjzduubRBOROQ7AkVMkamx+kMwq3CAMSuaASkhwrdqyIYvrApcy8ajrrGBKQQwEB44fwyFizodJ4KULH1aHWMN7cfaF21cEFIKwok1S3zpIqBflDXaK6G1e1s38ni7YZQTLO0/aBW1ZVKD4gq9Ews25h1KSQkXp5cefL5iqYaT3TqXvCYWASxNtL5E5Rd8Ud19eekVDbuAUwpYFyQLm7v0zzivJWGaOatsjxiYxw4cs93KJNkSEFMwixJ3k8hdNvbpE+wVUyJd5aQagQoIc75Dl1JsLQNhNiKR3hqH8lQdJNiRa3L6ZwNs8DuZLpChcF5YzqOTELf0gVpWxvR1f4clPZ5iSGN5NMclc4teJnkJBCUJSGdSSmWk6AAEqB6EQnM11JYuBa2WZOhIieVOlBBYlKgbolFMrqRM3v9LwPMw1woWyLHPN+NzE21MUh+qQ3bJS5d1QFXOx6ZjoaQXdsyeTCNy0AAZ+0YgFks0BTMQoE7jxGCSXAjyKyw+giw9k5dOGlc0FXqX+IzHTmkoF/wAin8yDAvYbHCbhpaQbyxQocCMvUX9YMxaHQEk+EJB9h1jrZz31bzECUQZaa0oPKvk/IxqaoEA5PSfQwJtKYlKku285AvkNTY8vWJ1LCksFpdP6VA65fEDYqQVTEoJLhGmrihz7+0bIDF4VmKcAbR15mKH2gxKVz1kFkOuktmblvKpzCLEpsnyEPNvYQJxK0h2dkhmD05B7NYXhVie8F+8Ie9Liz6DiMw8WrAUhKm19h61gfayFqFnJ/o876gdzUEBFTjjGko5ekEqdLuX0vnn56RGJyTS9IIN/Il/vziim8WaJCu7riPXr5g/s9sfvzNAF5cszP9JFuocekRY/DOC1gRwiw9hcYJeLnVAMpBdsgE3LcQR8RW8VtaUBSxBa13Djjd/sxPsNpmzZ01KhQBBTh+oFxTQj3zg1qs6AJawS/iB4EfMKFYRTXFvI65xOjZ9SkAWqS2bX0z6jrEidvKDslgsvZy1hzDiJMNtBRmINOSnLO1r2f+sOKUQnCN+7ClO8E7HxZRPkGZ+WYUK4NMFJ9H9oeYCapRCCaaXQSOCTkRyhBIxCzMAV+u7KF3Nyzf3ba3i37MwJNUwAA1llB3GoIHhIvlC04pRU6ebn52wGZemm6C7EqzwppsGzeKw1w8wd2Ui7WH395Q62ZLpJRW4LEPmD88IXYLCpQ28kBw9joeGnmIaSFVUTAlFJdlAtYa5XiTOqGenDrlFSQlILlLGgDO2nuMYYrsLaqvzfONO6CkZsQD9YjxSVFJYgcyYklr7uXUbgXJzyhM6mKKSbzAZdNFf/ALPsMgYeopZdar5EZBvbKLbJxLpBqsQDHnvZ+aVBUxBIBmrYPYBTG4yLc4aYLbSlpADKBfJQdkml2fLhAZVqSHDEEdV+YvdoWZS7Sskipwfy4RZcVs+TNu4CuNvsxV8Rs9UrGykrvLBCgQSXLgBw1tdWz6t0bVSwqHtAGLxRmqdgkAMPLnC9pmyUfzEgXtmm3KBSZU0eBRN3b7QDs/CGmwp3lKCRYJBUSAPIGHqLi4iPCKQPEoeYPyIMGI4FJ8oiWhBP8xZxJ3x6Ys0SBhhHCRAiJJ7pAbMEnLgefODu/PL2gGdiCQFOxTZgxDm335wAXcEueG/fAgFFQMdrUEy95IKRQ4N3sze8MdpYWtQIZ0mwNrEMQ+fOK7jccpSVIKd0uHBY2+xEv/1Eae8oBULAqHsDmeP0itYJ4TLur2NnRzpm5PlpXM+yTJgTdzJwI2NnTCD8TgiUlJFrOlKnIbUatxH2V+J2YpRsKQ2QWxP04ax1s/tOuYtSVJSlQTU4/MHAbLmI3tfb06XJXNRS6GsoPUSQGdrcYry5qCsJSanJolWqwqQkmaGu4lx7b8AIiw2FWkLSX3kmk1JckJLOyj9M43Kk0IShBKUgXAIc66BWr6RWcR25xczu5VCZSjNSlZBFxUAUgUuCeOfCLRtKdMKmKk5MpUtctKme4BmJSo+pzglqStAcjHd6vDvYqUqSUIZnzp6448HgGYhRUSky6czXKqP+ruj8RmLkrQbhN2ypbhYgAAdIiVUWAmYgpyApQs09FmNzKEqp3gLHfQJan5hg/SJU8uhwM4p9pXUoQ5BrRq/HWcb/ABSUhizhj4m6e0cHHJ1UkHhUm3tAcyfv6kNk/wDXnEKseAfAr0ELJs75Px+YjyZ4AxbLrGD+wW1AkTJaZVLEOUuoqLMSpzYboy4xZ8WApIFNVXiL8tQ3GPPthTEoTmUlRcl+Bt1H0h/J7ShJZ8gwUQTVxy+7xbtdoQJ6wxb4AB249CCWfsq0LsyFCqiC+5RLHkQGAfzhvg8CgIG5aoMzbtvU6xJjcRKkrMxQKQEkVMTZiTk7ADiOMKU9r5MsOZayOLA/tA+N7cybn8OFJOQJIfzFwNY3lTDMLJDk7+MKWiwTJCb0wXQNSDiaChclzgKnSE/btlKkLG6FgLfeuFKKU2LsKQCf83lFNmTSi1RUaswXLAMGfIaxZe1vaD8U0ymmhLMS5IKhc8By87xTpslS1HUZfbkRW7PdKVOM+vKkL9qISvuQD+h9MSdmGD6Qxm4omXdwHa4Ba9+DvziHEY0K/KALeHRs2JL9HiLZuHUgKBBYl7cvsQ2RLeW1DHIrZ2AfIZVNqR1MPzp0uSgLUOW3Nqe+zGJtksUy1zlSZRc1LmgYDB/2GrM8QbIw65hnJSVVGScixzB9wKSB+uEk2W7AkW4D7zi5dg8OlWJuSoKlmxPElweifeLXtfsphlJKkyjULsmYpD3DjNgWGbWiAe3JVktCpUxJqxca4Vc4Uo1Nmr8rs5U9IKFAVbZXbx6y8sOH3PE7ZCNYFCagm4fjk8eiY/s/LSgJMtAKU+JK1uWvfIqN2e8AydiSSkhUmZU5KVCulrM5d2d4Mn8QSJiXAV/150OHW2GUfh21NeBSeMVHZ09lqSf1Zm2R4/eUXrY22kJShO9USWA4M5JPk7eUTYrs7JloTSDVU7AneLEZE34iJsHJkFSAlNKyopdVzZ8hxgC+2pM9AUEFnNdw8teEDkdjrCySsDJn2gny2Y1ajQZtjaSqUpDXpsSWJcWZiD5hmzgZfaFclhNSBUDeW7pN9TZRyAdtYLxuEQUJC0A0qlkO3iC0l/X2POGmJx6EqSk0gqskNmHA4cSPWJSe1UAspzwx+G2YxUm2SWBdAbbi2zGr+/NJO7XTkgpl4NcxgGmTLVEjMhtSPK4htsLaM3EYU96BJnEEEbu6bhJAchmYsTHSWN7VPmQCbaXyguSMgSkjhQDb0vHj2rKNMK6H59owbGkZny+I8ulzsUmf3GGIBclSSElCKVUu7gs9rDhxgjsxtLFrl0SMPLWZdiq6SxLtzDvrpFzw+FlKRPXLV3M1U2YAoDKlbBwxs1rX6xTzsvGylvIXMZ2dJSgG5LkGxcfMOSP4ea6VLQMM6vUlyN7CvrGe0bWuXPcJUcduQoAS+IfDOLCnE4piJ0sIWOK1FJHmwHuY1K2kghq5ZLaEgPyB/eEGKVtKreUvmVBHtZmyjJUrHT1AbqlBNvBcc2s/MwNfZ0gurvUNi4V8jDjSNP8A6vhDIU+hDeh8m4wyn7YnBbJlVIH5klvmMk9oJjn+HUP7pdT5ZFg2eukU441aVXKqgSCD7iIFY1IL063FSg/+60Of/ngRUDfX545Qqe3UOwB3U8nEX+Zt5NCguqUfCykORVYHdqDOR9YP7MbYkr7sIpK6lKmJP5ajSORYgnoIouB2jKIU2HqLazljQ6VXz9oL2Ph5K8RNw6pEtYRSoVsogEB0pfIOSq2qjCk/s5FiSS9aHLIh6YjHUnSGrLbv4tVEtiC+0HNO7Ee8M8TjacQtplnNiWBuQ0Ez58taQpCjVkoOFJA+h/aEu0dm4aXOAl4aWBzSDcc+Yb1hnsigJWyJaCA7hID8iGvCplpTL8IfkNmTx1RC7qZjBmGdWw0aMlzqVIYgFUxCWuKgpQB63fyiwS8OkhYVd3OrpYPYGymbjpFXxClPJLBkz5Zu2h0MWWdiFqrIIsCUgsMr+kDTM7tnHlk+8e8TragqKwcGij9nJsv8aCslnJBCQsufzEBtHJz8ou+Ixkmq81PJJlGWeqjJVFQ7M7GmrxffTQpEuokrAYgswCagQxcZDJ4uw7PyKyZipsxQd3KUpztcJBybWLFvLqADYARF7JnSZCD3j45AF+dfOE8vFyVzFJTJWohyQ9dhmWSlLxxtLE0kpRJSkJSk3SoNWCQC5sWy/pFqwWzpKATKFIAUlyok5gZnQUmFHaNaaTMmpZK0iVS91KrFBztr/qgHcXhdI6x5Ri39pd8lkfTj0C7e0VCVjiFBgl7mz/ECTtsTCo/w/wDb/WAUKpmqB/Kog3a4tBXcHRK/QxrcRLX4hlm0c+mbMS4SSBEezl1OHO6NAcybu2UMFq0J9QfvSEfZ8KC1sNAcumZvDpSlq8b8Khf/AIjFvS088+fCPovY00mxoO8cnA2jjGly3/TbK5EA45B4hvq1+kGiYQ7khrX/AHEQGaJgKXyyIJ/N5+UG7Nn91NJX9JBBOjtXybcTCP4hsf8AFyAiSrxuFAP9V16F2GGD5hIgFYlqeXrQL/5jnYuAASzawskukjeZ72IiTaiFoUoBwSlD08CtQ+IDlyy6RS51ZOY9P2i3ZGZRBcXo5ftC9dlIWllBLEaNlwL84eILAXF/vhBmGSSjxgAu7pKmyuGhYiVM/Spvu2USSRNWCCtIReyyq5ZrBDe76Wje2uZOOY28sa8IB2MAm1YYgipIyzLilMj8iw/2e4cd8opNQQLnKynA93iybS2soTFS0lNB3CwNV82IPQQj7AS5YlLSpkrUspUagDSxKeA4sWhvi9n0kJTvOmyitIBI1JyHkwjibalK7asqybyq+mOGorHSdjJQlLqxqQMgeLORhXMYxrbKkKSSZgRSguTRkFJ49R/miv4Wfh1OpU2YdAlAIB9Re3CHGNWVFMvu0qLbxCioEPYbqCkN6xCmQtJCpWHlqKbBXd1KGtnSPkRvZJd1DE+Y9wcdlYdmqWlFxKx5nzcht43tGL2kJi5QAoYliqakkqIAAYEgquLMemp+Hw8wzZajMSoVFyU06FgBrYn7eE+PXNK5felcus0snDpTapKmIExWYBve2lzD/ZQBmJCC5BJZmezG/CDLSAkJSA3i/wBWNDVnDjIYQjZpV9Ky7MQffDJ93pBWMJZiFDR08QUjL094J23MSe6AFJUaahmlg9vQDzIgTtO/4SYxUk2W6SHBCgbPo8HYgVplaOUls21hNMt0+E0JHA8d9QNowjMwhS8MhycvEWHJYks7/Kn5l7iCETRqx6f0iFDb+oBHX7I94IAH9wdQPrE1aQ/i69YOR4WaFWyAAlQCwXmzNG/PwiVTKUrepyAAIz5cH+kcbOUmkikD+JMuCWvMUc42tJAcJ6kn9xeC+G8Xx4fEGnovzCFa7P3jpEoAMA7XF/l4UYUqlCYBdSkslGdRzJegByLXMGypiyrRtGXw4iOJKjWmqkgg2quSdBvDMZQZF4BTtrvauLwjMsybySHo+vpTn6RQ9vidLW5l0AKLKAF/0uGYemmsBSsUaZi6UkApqqAfeNgL8jYc4vWLwlco1IUtKiFAEBwTcDPKFa9lFKnThakqCQrwrY3FgkuMxf4aOosvbCDKCVgOKO7OA2qnfHYC22ErT2Ur+IK5SmHoSGxYBhTGpDuS9SOx/dzwoiQiXQW1LnMsDl6xxsfCgbTxhFmQjP8AvAf/AB+YuuDw8tAbwcPsdIV4Yf8AcYhZIKXSkEBiSlIJB5Cqx5mItqtHeGYrUMAVFTeJOpJ1wpD8iXcShOhdwkByxGQAziv7RP8AFeyQokufM3MT7OUl2pKnLAnhk7cH+Yl2nJFQmKFSbBrhgf6mJsPMBSpaEUglIGpsXtwEemTfAzGtMaPhvjo7/wDKSBoBx9aRDj5KQUGkn+Kh24PD5GHC0qTLCgSg2sGe3lrziu7QxKt02/my/ZYi37EniZWFB7aAP72EDkpK2QWq+WzXKJlqvAKJ0GfDCJNmS65SUruxdiQdHS7ciC0FzQDNB4pKSPL/AJiPABAWtKbHNrZeEZf4Y2uUTNqB8KVDzqoIP+0xZCQHyx8/uY5UpCaY1Hl0YGlMEzkpYXV6klz6v6Qq7VqSJWGJyE+UfMB1Q5QgJ7xI1Ln/ADEH784qP9oGJCRhkOzzPZIb6wdAK1NCh8FesYqO28KoYidVnWp/WIE4eGnabFEYycDxB83SC8A/ik/3fQQ+JC1JBDentCy1hJuthCTs9NacXP5Sw+sWYTrZ/MV3YEtJWotcILeo/eHilWbTOJHaIBncPmPpH4blg2IOP1K9hEqVgZG+dzaOZMwPmh/7of6wOae88NQpY+Y+/aOpQ3rDgBkWDwAyWHB8oEq1oM1glmURR/RgHrkcYzFYdK5zLamgAOoC7lWoPL3hFPUyr3YflSke726RZMRKJuUJmOwooBLjg9soqaJJcpOYJcHz+c4r9km8lQ/2+7xB/EiLk1CmqSvjg1dldz5QUmem+4psrpT62VDFGJUBUGLCwuTbIWIvCsywkeENzIiSXOFDAJL2Ad79B7RRmpvJZVetkQZMy4oKRQjrPqsXH+znFKPe1KYEghBIBfUsnkRcnSLaDe6ktzmLv53+Xik/2b4sJXMlrKUklwkWexBfO4Leoj0FEs/b/WOUtNme2TCA30kYaY9PviimcpMkXqu4Lk661MLRLQFVBaBx3ir5ZukF94V+JlPxlkg+pLwQqSdX6FQ+I5MvkT53+YKiQwrA12tS1Ourb4SbSkplgKlSqS/ioCW8gRfLPSONjTZtQVMWVUhQTZIs6eHWGm1ME6Q0tg4yAHrnaB8DITq+d/IXhG1koZGJNKgHZw6pFSxJMxJWomihmcN3CDcYBNlLQqyVJIJHMZj39IMTMJCDkwFuDJaBZhCUqLsAC/Jo7ljdQRkwa+dojCaoAgZnzhlQF/h7xtOar8cvMGJpzPmv1t/5RFhgCfMP+/s0d7SUqUfBLUGs9YflZUFkpUqYWwrBPqUEg1/aAEApH8xRuTvU6knPvIhXNUzGaxOQFRHsSB6xIJqlb3cy0jUgZf7oFVPUbFCR/wC2j5aN6vh1yMNGUTmD1seOMPIXu7ymFy5U5b26RBOUUVAKUkhJa5V+pm/qGyhjhwkpLgQm2skuKVM5bOwvnBZcy+tj167Y0k2QKW326waK5P2/iJYmS0qoCVEUsCbvdzrb3jvB7bxCZikrmk0jNKUqIvn5M56Q0kdnSVrmKmJDqqCkvdy93sIYHZIKpiqnrDGyeDXtnq4aLU21WJAa6kuHJunGmZSdr57YmSpNtVM7xaiPEaO9K4gkjT7xvZu3VzFIQV7ypQmGzcAzcD5wzkybkj8xqLnVgPgCFeB2OuWtJFKgJdD6lmYfMWWRhyzO0Q7WZYU8s+H7/tSH5SyEeLH7ecJ9qYcqllOoAYC7+TQZhsAoS0yym6TcMXc34ZwecKhIVVvC3I9CMmg0qRS4Bt5xhc9PdkkE1J0631jKrYboQkbYVbX2RJTJdJKl1JLOxcKBPoAT0jcmd3aipAYMRv8A7DP1ifFndJS4uzudbfX2gPaClDMvyjVNqK1ApASf23xPmzJjKvKpw20hh+KKkKIV/EpFxoCdMxpB2Am1JJOdvj9wYR4WcT3guSJabO4u9tL2hnsaZuL4A+rO8WZKjeSlWaRz/YQk6FSyQagk+g8n6eNy0shlOVAXPH+to8x7Z4tc3EJRSN0kAEubsX00+kelYxTJ3iwZndrm0eRbWnFU9c0EkVKYHPgE/SLlilkqKoi2ggMk7vKN9v1lOOmODdKCPKkD5Biv/jFcIedupqzPSFUlaJMtK1MXJpc1aA3yitd6eHsIpSD/ACkg6CBzEPMJEN9kfzeivgw5lxkZHO9pfm8Pcx9J/Cv+DP8AuPomIz4+qviO0eNEZGQdX5Y3H0VHO/5//Mf3Jg2bp5n4isYjxev1jIyCdh/q61g34u/yt6o6ESYRRvfhGRkU7R9J6zMc1YvzU7x/aI67NzlfiBvHXU8I9fwH8pHlGRkS7R+YdyfVcPTf8On/AHL9JUFcIklD5jIyFjCqcYkn/foYR4M3/wA4+kZGROtmKePpHTWH6Ff8YJXkr/N8GOh/Ll9IyMjnlfQN59o3X9Q6yiOX4k9Yl27ch75/+RjUZD9h/VuPrBk/nDj7x1hv5D6ub6wCvwnzEZGQvP8AzOXvG0v6zv8AeBOEC4zIRuMjZGMPo+oR1gjumNoyjUZFNGAjf9R3w1wP8v8A90fEM1Z9T8xkZE2f+aeHtEW3fUN59oiMTzMk9fiNxkKH6Dx9RAV4p3H0iHHfyz5j/wAhAOKyV1jIyPSOvKArxO73gvZPhV0gxIYWtvH5jIyOms30o/2piYvPj6ws7Rn+Ef8AGn5TFG7LIBmSHAO6Tcatn5xkZHR2b8hfD0iPbP8AFI3n3hH2u/8AvMT/APtX8mEsZGQ9I/KTuEDtP5qt59Y//9k=" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">Abstract Painting</h4>
                    <router-link to="/AbstractPainting" class="btn btn-primary bg-danger">Take a Look</router-link>
                </div>
            </div>

            <div class="card cardstyle" style="width:200px; height:200px">
                <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0969/9128/products/cityscape-painting-empire-state_b915f261-8d7c-46f2-ab72-d075edd752d5.jpg?v=1537864661" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">Cityscape Painting</h4>
                    <router-link to="/CityscapePaint" class="btn btn-primary bg-danger">Take a Look</router-link>
                </div>
            </div>

            <div class="card cardstyle" style="width:200px; height:200px">
                <img class="card-img-top" src="https://www.artandobject.com/sites/default/files/styles/eletter_top/public/miro.jpg?itok=s-dAQlU4" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">Figurative Painting</h4>
                    <router-link to="/FigurativePainting" class="btn btn-primary bg-danger">Take a Look</router-link>
                </div>
            </div>
        </div>

       
    </div> -->
    
        <FooterFile/>
    </div>
</template>

<script>
import HeaderFile1 from '@/components/HeaderFile1.vue';
// import SliderFile from '@/components/SliderFile';
import FooterFile from '@/components/FooterFile';
export default
{
    components:
    {
        // SliderFile,
        FooterFile,
        HeaderFile1
    }
}
</script>

<style >

.history
{
    display: flex;
    flex-direction: row;
    padding-top: 30px;

    /* border: 2px solid red; */
}

.history .img1
{
    /* margin-left: 20px; */
    /* border: 2px solid pink; */
   /* transform: scale(0.5); */
   height: 339px;
   width: 900px;
    
}

.history_txt
{
    font-size:5rem;
/* text-decoration: 1px solid underline; */
padding-top: 10px;

}

/* -------------- History Cards Starts from here --------------------- */
.History_cards
{
    margin-top: 100px;
}
.History_wrapper
{
    display: grid;
    grid-template-columns: 400px 400px 400px;
    gap: 20px;
    justify-content: center;
}

.History_wrapper .card
{
    border: 0.5px solid #395f72;
    background-color: rgb(251, 248, 240);
    /* border-radius: 30px; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.History_wrapper .card:hover
{
    background-color: rgb(241, 235, 219);
}

.History_wrapper .card .card-title 
{
    /* border: 2px solid pink; */
    color: #395f72;
    font-weight: bold;
    padding: 10px;
    font-size: 20px;
}

.History_wrapper .card .card-text
{
    color: #395f72;
    /* font-weight: bold; */
    padding: 5px;
    font-size: 20px;
}

.History_wrapper .card a
{
    background-color: #395f72;
    border-radius: 20px;
    border: none;
    transition: 0.5s;
}
.History_wrapper .card a:hover
{
    transform: scale(1.1);
}

/* ----------- UploadNow -------------------- */
.upload
{
    margin: 40px;
    margin-top: 60px;
}

.upload p
{
    /* border: 2px dotted red; */
    margin: 20px;
    padding-left: 40px;
    padding-right: 40px;
    color: #395f72;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
}

.text-center
{
    padding: 30px;
}
.column img {
    height: 500px;
    width: 500px;
}
.txt
{
    padding: 20px;
    margin-top: -70%;
    font-size: 20px;
}
.txt1
{

    padding: 20px;

    font-size: 20px;
}
/* .cardstyle
{
    clip-path: polygon(25% 0%, 80% 0, 100% 55%, 100% 100%, 0 100%, 0% 50%);
} */
/* .homeimg
{
    margin-left:400;
}  */
.cardalign
{
    display: flex;
    padding: 50px;
    margin-top: 30px;
    margin-left: 15%;
    gap: 100px;
}
.column
{
    float: left;
  width: 33.33%;
  padding: 5px;
}
/* .cardalign
{
    margin-left: 150px;
} */
/* .row
{
    float: left;
} */

</style>