package shop.ingong.myba.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class MemDto {
    private int eId;
    private String eName;
    private String gen;
    private String addr;
}