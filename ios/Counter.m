//
//  Counter.m
//  nativeModuleIos
//
//  Created by Allan Jonna Iffaldy on 02/05/23.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(increment:
    (RCTResponseSenderBlock))

RCT_EXTERN_METHOD(decrement:
    (RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end


